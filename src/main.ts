import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';
import { ConfigurationInterface } from './config/config.interface';
import { ConfigModule } from './config/config.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('CPE KMUTT API')
    .setVersion('1.0')
    .build();

  const config: ConfigurationInterface = app
    .select(ConfigModule)
    .get('APP_CONFIG');

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
