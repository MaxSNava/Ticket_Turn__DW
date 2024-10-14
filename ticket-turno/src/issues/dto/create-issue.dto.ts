import { IsString } from "class-validator";

export class CreateIssueDto {
  @IsString()
  name: string;
}
