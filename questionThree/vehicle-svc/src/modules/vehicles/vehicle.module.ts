import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { Vehicle } from 'src/models/vehicle.model';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ACCOUNT_SERVICE } from './constant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    ClientsModule.register([
      { name: ACCOUNT_SERVICE, transport: Transport.REDIS },
    ]),
  ],
  providers: [VehicleService],
  controllers: [VehicleController]
})
export class VehicleModule { }
