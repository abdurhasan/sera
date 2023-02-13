import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/databases/database.module';
import { VehicleModule } from './modules/vehicles/vehicle.module';


@Module({
  imports: [
    DatabaseModule,
    VehicleModule
  ],

})
export class AppModule { }
