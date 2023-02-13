import { Inject, Controller, Post, Logger, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { constant, NEW_VEHICLE } from './constant';

@Controller()
export class AccountController {
    @Inject()
    private readonly service: AccountService;

    @Get()
    getConstant() {
        return constant;
    }

    @Post('/create')
    createAccount() {
        this.service.createAccount()
        return { success: true }
    }

    @EventPattern(NEW_VEHICLE)
    async newVehicle(data: Record<string, unknown>) {
        // business logic
        Logger.log('[EVENT][NEW_VEHICLE].....')
    }

}
