import { Body, Controller, Get, Put } from "@nestjs/common";

import { UpsertSettingDto } from "./dto/upsert-setting.dto";
import { SettingsService } from "./settings.service";

@Controller("admin/settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  findAll() {
    return this.settingsService.findAll();
  }

  @Put()
  upsert(@Body() dto: UpsertSettingDto) {
    return this.settingsService.upsert(dto);
  }
}
