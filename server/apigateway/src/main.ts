import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GrpcExceptionFilter } from './filters/grpc-exception.filter';
import { GrpcErrorInterceptor } from './interceptors/grpc-error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GrpcExceptionFilter);
  app.useGlobalInterceptors(new GrpcErrorInterceptor);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
