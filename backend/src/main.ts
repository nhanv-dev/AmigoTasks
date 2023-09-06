import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { AppModule } from './module/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  // app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
