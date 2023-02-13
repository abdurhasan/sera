import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from 'src/models/vehicle.model';
import { toObjectId } from 'src/utils';
import { DeepPartial, MongoRepository } from 'typeorm';
import { ACCOUNT_SERVICE, NEW_VEHICLE } from './constant';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class VehicleService {
  @InjectRepository(Vehicle)
  private readonly repository: MongoRepository<Vehicle>;
  @Inject(ACCOUNT_SERVICE) private client: ClientProxy;

  async getVehicles() {
    return await this.repository.find({});
  }

  async createVehicle(param: DeepPartial<Vehicle>) {
    this.client.emit<number>(NEW_VEHICLE, {});
    return await this.repository.save({ ...param });
  }

  async deleteVehicle(userId: string) {
    await this.repository.deleteOne({ _id: toObjectId(userId) });
    return true;
  }
}
