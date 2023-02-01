import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ValidationPipe } from './pipes/validation.pipe';

const PORT = process.env.PORT || 5001;

const start = async () => {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Postgres Swagger Docker Learning')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('by Devid Corsard')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);

  // app.useGlobalGuards(ThrottlerGuard);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => {
    console.log('Server runs on port: ' + PORT);
  });
};

start();
