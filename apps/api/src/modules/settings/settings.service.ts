import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UpsertSettingDto } from "./dto/upsert-setting.dto";
import { Setting } from "./entities/setting.entity";

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingsRepository: Repository<Setting>,
  ) {}

  findAll() {
    return this.settingsRepository.find({ order: { key: "ASC" } });
  }

  async upsert(dto: UpsertSettingDto) {
    const existing = await this.settingsRepository.findOne({ where: { key: dto.key } });
    const setting = this.settingsRepository.create({
      ...existing,
      key: dto.key,
      value: dto.value,
    });

    return this.settingsRepository.save(setting);
  }
}
