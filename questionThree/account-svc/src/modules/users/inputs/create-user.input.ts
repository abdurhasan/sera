import { IsString } from 'class-validator';



export class CreateUserInput {

  @IsString()
  readonly fullName: string;
  
}
