import { Injectable } from "@nestjs/common";

import { MailService } from "../mail/mail.service";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { LeadStatus } from "./entities/lead.entity";
import { LeadsRepository } from "./leads.repository";

@Injectable()
export class LeadsService {
  constructor(
    private readonly leadsRepository: LeadsRepository,
    private readonly mailService: MailService,
  ) {}

  async createLead(dto: CreateLeadDto) {
    const lead = await this.leadsRepository.createLead(dto);

    await this.mailService.sendLeadNotification(lead);

    return {
      id: lead.id,
      status: "accepted",
    };
  }

  findAll() {
    return this.leadsRepository.findAll();
  }

  updateStatus(id: string, status: LeadStatus) {
    return this.leadsRepository.updateStatus(id, status);
  }
}
