import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  curp: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;
}
