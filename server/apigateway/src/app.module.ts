import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTHENTICATION_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'authentication',
          protoPath: join(__dirname, 'protos/authentication.proto'),
          url: 'localhost:50051',
        }
      }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
