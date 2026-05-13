import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

import { CreateLeadDto } from "./dto/create-lead.dto";
import { UpdateLeadStatusDto } from "./dto/update-lead-status.dto";
import { LeadsService } from "./leads.service";

@Controller()
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post("leads")
  createLead(@Body() dto: CreateLeadDto) {
    return this.leadsService.createLead(dto);
  }

  @Get("admin/leads")
  findAll() {
    return this.leadsService.findAll();
  }

  @Patch("admin/leads/:id/status")
  updateStatus(@Param("id") id: string, @Body() dto: UpdateLeadStatusDto) {
    return this.leadsService.updateStatus(id, dto.status);
  }
}
