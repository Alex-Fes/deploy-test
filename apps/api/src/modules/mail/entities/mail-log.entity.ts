import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum MailLogStatus {
  Sent = "sent",
  Failed = "failed",
}

@Entity("mail_logs")
export class MailLog {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  type!: string;

  @Column()
  recipient!: string;

  @Column({ type: "varchar", nullable: true })
  subject!: string | null;

  @Column({ type: "enum", enum: MailLogStatus })
  status!: MailLogStatus;

  @Column({ type: "text", nullable: true })
  error!: string | null;

  @Column({ type: "jsonb", nullable: true })
  metadata!: Record<string, unknown> | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
