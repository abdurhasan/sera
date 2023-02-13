import { IsInt, IsString } from 'class-validator';



export class CreateAccount {

  @IsString()
  readonly vehicleId: string;
  @IsInt()
  readonly amount: number;
  @IsString()
  readonly description: string;

}
