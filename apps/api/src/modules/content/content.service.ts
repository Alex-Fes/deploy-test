import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UpsertContentBlockDto } from "./dto/upsert-content-block.dto";
import { ContentBlock } from "./entities/content-block.entity";

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(ContentBlock)
    private readonly contentRepository: Repository<ContentBlock>,
  ) {}

  findAll() {
    return this.contentRepository.find({ order: { key: "ASC" } });
  }

  async upsert(dto: UpsertContentBlockDto) {
    const existing = await this.contentRepository.findOne({ where: { key: dto.key } });
    const block = this.contentRepository.create({
      ...existing,
      key: dto.key,
      title: dto.title ?? existing?.title ?? null,
      content: dto.content,
      isActive: dto.isActive ?? existing?.isActive ?? true,
    });

    return this.contentRepository.save(block);
  }
}
