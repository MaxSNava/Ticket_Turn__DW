import { Type } from "class-transformer";
import { IsDate, IsInt, IsString } from "class-validator";

export class CreateTicketDto {
  @IsInt()
  turn_number: number;
  @IsDate()
  @Type(() => Date)
  date: Date;
  @IsString()
  barcode: string;
}
