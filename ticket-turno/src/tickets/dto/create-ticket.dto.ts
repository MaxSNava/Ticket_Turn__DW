import { Type } from "class-transformer";
import { IsDate, IsInt, IsString } from "class-validator";

export class CreateTicketDto {
  @IsInt()
  turnNumber: number;
  @IsDate()
  @Type(() => Date)
  date: Date;
  @IsString()
  barcode: string;
}
