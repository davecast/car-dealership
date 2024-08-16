import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // Cleans the object we receive from unneeded garbage properties
      whitelist: true,
      // Returns that values do not exist, within what is expected in the body.
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
  console.log('Listen on http://localhost:3000/');
}
bootstrap();
