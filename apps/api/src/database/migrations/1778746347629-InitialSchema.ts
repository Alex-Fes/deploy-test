import { MigrationInterface, QueryRunner } from "typeorm";


export class InitialSchema1778746347629 implements MigrationInterface {
  name = 'InitialSchema1778746347629'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'editor')`);
    await queryRunner.query(`CREATE TABLE "users"
                             (
                               "id"            uuid                       NOT NULL DEFAULT uuid_generate_v4(),
                               "email"         character varying          NOT NULL,
                               "password_hash" character varying          NOT NULL,
                               "role"          "public"."users_role_enum" NOT NULL DEFAULT 'admin',
                               "is_active"     boolean                    NOT NULL DEFAULT true,
                               "created_at"    TIMESTAMP                  NOT NULL DEFAULT now(),
                               "updated_at"    TIMESTAMP                  NOT NULL DEFAULT now(),
                               CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                               CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "settings"
                             (
                               "id"         uuid              NOT NULL DEFAULT uuid_generate_v4(),
                               "key"        character varying NOT NULL,
                               "value"      jsonb             NOT NULL,
                               "created_at" TIMESTAMP         NOT NULL DEFAULT now(),
                               "updated_at" TIMESTAMP         NOT NULL DEFAULT now(),
                               CONSTRAINT "UQ_c8639b7626fa94ba8265628f214" UNIQUE ("key"),
                               CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."mail_logs_status_enum" AS ENUM('sent', 'failed')`);
    await queryRunner.query(`CREATE TABLE "mail_logs"
                             (
                               "id"         uuid                             NOT NULL DEFAULT uuid_generate_v4(),
                               "type"       character varying                NOT NULL,
                               "recipient"  character varying                NOT NULL,
                               "subject"    character varying,
                               "status"     "public"."mail_logs_status_enum" NOT NULL,
                               "error"      text,
                               "metadata"   jsonb,
                               "created_at" TIMESTAMP                        NOT NULL DEFAULT now(),
                               CONSTRAINT "PK_5f5d6638b167ebd36862ba28953" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "content_blocks"
                             (
                               "id"         uuid              NOT NULL DEFAULT uuid_generate_v4(),
                               "key"        character varying NOT NULL,
                               "title"      character varying,
                               "content"    jsonb             NOT NULL,
                               "is_active"  boolean           NOT NULL DEFAULT true,
                               "created_at" TIMESTAMP         NOT NULL DEFAULT now(),
                               "updated_at" TIMESTAMP         NOT NULL DEFAULT now(),
                               CONSTRAINT "UQ_e3c2be568197f08b364c91a102c" UNIQUE ("key"),
                               CONSTRAINT "PK_607a3abb7e7af9bb5c22090a597" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."leads_status_enum" AS ENUM('new', 'in_progress', 'done', 'spam')`);
    await queryRunner.query(`CREATE TABLE "leads"
                             (
                               "id"          uuid                         NOT NULL DEFAULT uuid_generate_v4(),
                               "name"        character varying            NOT NULL,
                               "phone"       character varying            NOT NULL,
                               "email"       character varying,
                               "message"     text,
                               "source_page" character varying,
                               "status"      "public"."leads_status_enum" NOT NULL DEFAULT 'new',
                               "metadata"    jsonb,
                               "created_at"  TIMESTAMP                    NOT NULL DEFAULT now(),
                               "updated_at"  TIMESTAMP                    NOT NULL DEFAULT now(),
                               CONSTRAINT "PK_cd102ed7a9a4ca7d4d8bfeba406" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "leads"`);
    await queryRunner.query(`DROP TYPE "public"."leads_status_enum"`);
    await queryRunner.query(`DROP TABLE "content_blocks"`);
    await queryRunner.query(`DROP TABLE "mail_logs"`);
    await queryRunner.query(`DROP TYPE "public"."mail_logs_status_enum"`);
    await queryRunner.query(`DROP TABLE "settings"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
  }

}
