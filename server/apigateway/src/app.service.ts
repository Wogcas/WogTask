import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { UserRegisterDTO } from './dtos/user-register.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { GrpcAuthInterface } from './grpc/grpc-auth.interface';

@Injectable()
export class AppService implements OnModuleInit {
  private grpcAuth;

  constructor(@Inject('AUTHENTICATION_SERVICE') private client: ClientGrpc) { }

  onModuleInit() {
    this.grpcAuth = this.client.getService<GrpcAuthInterface>('AuthService');
  }

  getHello(): string {
    return 'Hello World!';
  }

  async registerUser(userDTO: UserRegisterDTO) {
    return this.grpcAuth.Register(userDTO)
  }

}
