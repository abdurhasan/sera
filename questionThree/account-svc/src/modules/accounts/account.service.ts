import { InjectQueue } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Queue } from 'bull';
import { ACCOUNT_QUEUE, NEW_ACCOUNT, VEHICLE_SERVICE } from './constant';

@Injectable()
export class AccountService {
  constructor(
    @Inject(VEHICLE_SERVICE) private readonly client: ClientProxy,
    @InjectQueue(ACCOUNT_QUEUE) private readonly queue: Queue
  ) { }

  async createAccount() {
    this.client.emit<string>(NEW_ACCOUNT, {});
    console.log(ACCOUNT_QUEUE,NEW_ACCOUNT)
    this.queue.add('newAccount',NEW_ACCOUNT);
  }

}
