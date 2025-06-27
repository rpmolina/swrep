import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { name, description, version } from '../package.json';

const SWAGGER_PATH = 'docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(name as string)
    .setDescription(description as string)
    .setVersion(version as string)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PATH, app, document);

  const port = process.env.PORT ?? 3000;

  await app.listen(port);

  console.log(`\n 🚀 Server ready at: http://localhost:${port}`);
  console.log(` 📚 Swagger docs at: http://localhost:${port}/${SWAGGER_PATH}`);
}
bootstrap();
