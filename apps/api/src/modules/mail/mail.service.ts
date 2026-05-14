import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import type { AppEnv } from "../../config/env.validation";
import type { Lead } from "../leads/entities/lead.entity";
import { MailLog, MailLogStatus } from "./entities/mail-log.entity";

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(
    private readonly config: ConfigService<AppEnv>,
    @InjectRepository(MailLog)
    private readonly mailLogsRepository: Repository<MailLog>,
  ) {}

  async sendLeadNotification(lead: Lead) {
    const recipient = this.config.get("MAIL_TO");

    if (!recipient) {
      this.logger.warn("MAIL_TO is not configured — lead notification skipped");
      return;
    }

    const subject = "New lead request";

    this.logger.log(
      `Mock mail provider: lead ${lead.id} notification would be sent to ${recipient}`,
    );

    await this.mailLogsRepository.save(
      this.mailLogsRepository.create({
        type: "lead_notification",
        recipient,
        subject,
        status: MailLogStatus.Sent,
        error: null,
        metadata: {
          leadId: lead.id,
          sourcePage: lead.sourcePage,
        },
      }),
    );
  }
}
