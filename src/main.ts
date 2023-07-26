import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000 || 3500;
  await app.listen(port);
  console.log(`Server on port ${port}`);
}
bootstrap();
