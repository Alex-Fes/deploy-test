import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum LeadStatus {
  New = "new",
  InProgress = "in_progress",
  Done = "done",
  Spam = "spam",
}

@Entity("leads")
export class Lead {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  phone!: string;

  @Column({ type: "varchar", nullable: true })
  email!: string | null;

  @Column({ type: "text", nullable: true })
  message!: string | null;

  @Column({ name: "source_page", type: "varchar", nullable: true })
  sourcePage!: string | null;

  @Column({ type: "enum", enum: LeadStatus, default: LeadStatus.New })
  status!: LeadStatus;

  @Column({ type: "jsonb", nullable: true })
  metadata!: Record<string, unknown> | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
