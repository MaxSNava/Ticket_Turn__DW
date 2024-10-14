import { IsInt, IsString } from "class-validator";

export class CreateParameterDto {
  @IsString()
  dayWeek: string;
  @IsInt()
  maxTurns: number;
}
