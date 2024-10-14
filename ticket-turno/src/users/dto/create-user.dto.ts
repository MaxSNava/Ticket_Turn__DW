import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  curp: string;
  @IsString()
  name: string;
  @IsString()
  lastname: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;
}
