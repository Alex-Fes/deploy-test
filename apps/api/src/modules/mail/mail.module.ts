import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MailLog } from "./entities/mail-log.entity";
import { MailService } from "./mail.service";

@Module({
  imports: [TypeOrmModule.forFeature([MailLog])],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
