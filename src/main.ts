import {ValidationPipe} from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe )  //de esta forma usando estos decoradores se va a validar todo
  await app.listen(3000);
}
bootstrap();
