import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MailModule } from "../mail/mail.module";
import { Lead } from "./entities/lead.entity";
import { LeadsController } from "./leads.controller";
import { LeadsRepository } from "./leads.repository";
import { LeadsService } from "./leads.service";

@Module({
  imports: [TypeOrmModule.forFeature([Lead]), MailModule],
  controllers: [LeadsController],
  providers: [LeadsRepository, LeadsService],
  exports: [LeadsService],
})
export class LeadsModule {}
