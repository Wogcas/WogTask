import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './login.interface';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }

    @GrpcMethod('AuthService', 'Login')
    async login(@Body() loginDto: LoginDto) {
        return await this.loginService.login(loginDto);
    }
}
