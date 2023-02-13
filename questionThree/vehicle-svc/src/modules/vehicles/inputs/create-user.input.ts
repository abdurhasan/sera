import { IsString } from 'class-validator';



export class CreateVehicleInput {
  @IsString()
  readonly merk: string;
  @IsString()
  readonly model: string;
}
