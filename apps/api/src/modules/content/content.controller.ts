import { Body, Controller, Get, Put } from "@nestjs/common";

import { ContentService } from "./content.service";
import { UpsertContentBlockDto } from "./dto/upsert-content-block.dto";

@Controller("admin/content")
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Put()
  upsert(@Body() dto: UpsertContentBlockDto) {
    return this.contentService.upsert(dto);
  }
}
