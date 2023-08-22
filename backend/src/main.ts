import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe());
  // app.use(cookieParser());
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
