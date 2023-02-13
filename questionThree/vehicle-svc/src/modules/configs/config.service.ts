import { from } from 'env-var';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';

config({ path: '.env' });

@Injectable()
export class ConfigService {
  private env = from(process.env);

  public readonly PORT = this.env.get('PORT').required().asPortNumber();

  public readonly DB_TYPE = this.env.get('DB_TYPE').required().asString();

  public readonly DB_HOST = this.env.get('DB_HOST').required().asString();

  public readonly DB_PORT = this.env.get('DB_PORT').required().asPortNumber();

  public readonly DB_NAME = this.env.get('DB_NAME').required().asString();

  public readonly DB_USER = this.env.get('DB_USER').required().asString();

  public readonly DB_PASSWORD = this.env
    .get('DB_PASSWORD')
    .required()
    .asString();

  public readonly API_PREFIX = this.env
    .get('API_PREFIX')
    .required()
    .asString();

  public readonly REDIS_URL = this.env
    .get('REDIS_URL')
    .required()
    .asString();

}
