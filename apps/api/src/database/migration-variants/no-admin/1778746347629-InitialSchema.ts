import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1778746347629 implements MigrationInterface {
  name = "InitialSchema1778746347629";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."mail_logs_status_enum" AS ENUM('sent', 'failed')`,
    );
    await queryRunner.query(
      `CREATE TABLE "mail_logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "recipient" character varying NOT NULL, "subject" character varying, "status" "public"."mail_logs_status_enum" NOT NULL, "error" text, "metadata" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5f5d6638b167ebd36862ba28953" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."leads_status_enum" AS ENUM('new', 'in_progress', 'done', 'spam')`,
    );
    await queryRunner.query(
      `CREATE TABLE "leads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying, "message" text, "source_page" character varying, "status" "public"."leads_status_enum" NOT NULL DEFAULT 'new', "metadata" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cd102ed7a9a4ca7d4d8bfeba406" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "leads"`);
    await queryRunner.query(`DROP TYPE "public"."leads_status_enum"`);
    await queryRunner.query(`DROP TABLE "mail_logs"`);
    await queryRunner.query(`DROP TYPE "public"."mail_logs_status_enum"`);
  }
}
