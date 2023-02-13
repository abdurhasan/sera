import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { ACCOUNT_QUEUE } from './constant';

@Processor(ACCOUNT_QUEUE)
export class AccountQueue {

    @Process('newAccount')
    newAccount({ data }: Job) {
        Logger.debug('Start account queue...');
        Logger.debug(data);
        Logger.debug('Account Queue completed');
    }
}