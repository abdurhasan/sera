import { Inject, Controller, Body, Post, Get, Param, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { constants, NEW_ACCOUNT } from './constant';
import { CreateVehicleInput } from './inputs/create-user.input';
import { VehicleService } from './vehicle.service';

@Controller()
export class VehicleController {
  @Inject()
  private readonly service: VehicleService;

  @Post('/create')
  createUser(@Body() param: CreateVehicleInput) {
    return this.service.createVehicle(param);
  }

  @Get()
  getConstants() {
    return constants;
  }

  @Get('/getVehicles')
  getVehicles() {
    return this.service.getVehicles();
  }

  deleteVehicle(@Param('id') id: string) {
    return this.service.deleteVehicle(id);
  }

  @EventPattern(NEW_ACCOUNT)
  async newAccount(data: Record<string, unknown>) {
    // business logic
    Logger.log('[EVENT][NEW_ACCOUNT].....')
  }
}
