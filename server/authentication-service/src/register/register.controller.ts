import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegisterDto } from './register.interface';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

    constructor(private readonly registerService: RegisterService) { }

    @Post()
    async register(@Body() registerDto: RegisterDto): Promise<{ message: string }> {
        await this.registerService.createUser(registerDto);
        return { message: "User registered successfully: " + registerDto.username };
    }
}


