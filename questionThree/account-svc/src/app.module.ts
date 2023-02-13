import { Module } from '@nestjs/common';
import { AccountModule } from './modules/accounts/account.module';
import { DatabaseModule } from './modules/databases/database.module';
import { UserModule } from './modules/users/user.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from './modules/configs/config.module';
import { ConfigService } from './modules/configs/config.service';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AccountModule,
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        redis: {
          host: config.REDIS_HOST,
          port: config.REDIS_PORT,
        },
      }),
      inject: [ConfigService],
    })
  ],

})
export class AppModule { }
