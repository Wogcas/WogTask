import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { GrpcMethod } from '@nestjs/microservices';
import { RegisterDTO, RegisterResponse } from 'src/shared/grpc/register';

@Controller('register')
export class RegisterController {

    constructor(private readonly registerService: RegisterService) { }

    @GrpcMethod('AuthService', 'Register')
    async register(registerDto: RegisterDTO): Promise<RegisterResponse> {
        const user = await this.registerService.createUser(registerDto);
        return {
            user: {
                id: user.id,
                username: user.username
            },
            message: 'User registered successfully'
        };
    }

}
