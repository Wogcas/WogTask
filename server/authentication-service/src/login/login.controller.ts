import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { GrpcMethod } from '@nestjs/microservices';
import { LoginDTO, LoginResponse } from 'src/shared/grpc/login';

@Controller('login')
export class LoginController {

  constructor(private readonly loginService: LoginService) { }

  @GrpcMethod('AuthService', 'Login')
  async login(loginDto: LoginDTO): Promise<LoginResponse> {
    return this.loginService.login(loginDto);
  }
}
