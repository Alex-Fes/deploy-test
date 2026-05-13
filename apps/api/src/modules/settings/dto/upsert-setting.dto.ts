import { IsObject, IsString, MaxLength } from "class-validator";

export class UpsertSettingDto {
  @IsString()
  @MaxLength(160)
  key!: string;

  @IsObject()
  value!: Record<string, unknown>;
}
