import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades que no esten en el DTO
      forbidNonWhitelisted: true, // Lanza un error si hay propiedades no definidas en el DTO
    })
  );
  
  await app.listen(3000);
}
bootstrap();
