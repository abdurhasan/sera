import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from './modules/configs/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = app.get(ConfigService);
  app.setGlobalPrefix(env.API_PREFIX);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      host: env.REDIS_HOST,
      port: env.REDIS_PORT
    }
  })

  await app.startAllMicroservices()

  await app.listen(env.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
