import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { writeFileSync } from 'fs';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.disable('x-powered-by');

  const config = new DocumentBuilder()
    .setTitle('Locate by IP API')
    .setDescription('Location determination by ip')
    .setVersion('0.1.0')
    .setContact(
      'KarenKuro',
      'https://github.com/KarenKuro',
      'kkarenk888@gmail.com',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  writeFileSync('./swagger-spec.json', JSON.stringify(document, null, 2));

  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    console.log(`APP: 3000`);
  });
}
bootstrap();
