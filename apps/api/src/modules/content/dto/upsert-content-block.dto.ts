import { IsBoolean, IsObject, IsOptional, IsString, MaxLength } from "class-validator";

export class UpsertContentBlockDto {
  @IsString()
  @MaxLength(160)
  key!: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  title?: string;

  @IsObject()
  content!: Record<string, unknown>;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
