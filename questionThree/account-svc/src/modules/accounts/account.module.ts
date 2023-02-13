import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/models/account.model';
import { AccountController } from './account.controller';
import { AccountQueue } from './account.queue';
import { AccountService } from './account.service';
import { ACCOUNT_QUEUE, VEHICLE_SERVICE } from './constant';


@Module({
  imports: [
    BullModule.registerQueue({
      name: ACCOUNT_QUEUE,
    }),
    ClientsModule.register([
      { name: VEHICLE_SERVICE, transport: Transport.REDIS },
    ]),
    TypeOrmModule.forFeature([Account])],
  providers: [AccountService, AccountQueue],
  controllers: [AccountController]
})
export class AccountModule { }
