import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateLeadDto } from "./dto/create-lead.dto";
import { Lead, LeadStatus } from "./entities/lead.entity";

@Injectable()
export class LeadsRepository {
  constructor(
    @InjectRepository(Lead)
    private readonly repository: Repository<Lead>,
  ) {}

  createLead(dto: CreateLeadDto) {
    const lead = this.repository.create({
      name: dto.name,
      phone: dto.phone,
      email: dto.email ?? null,
      message: dto.message ?? null,
      sourcePage: dto.sourcePage ?? null,
      metadata: dto.metadata ?? null,
    });

    return this.repository.save(lead);
  }

  findAll() {
    return this.repository.find({
      order: {
        createdAt: "DESC",
      },
    });
  }

  async updateStatus(id: string, status: LeadStatus) {
    await this.repository.update(id, { status });
    return this.repository.findOneOrFail({ where: { id } });
  }
}
