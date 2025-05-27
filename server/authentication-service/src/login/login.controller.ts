import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './login.interface';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }

    @Post()
    async login(@Body() loginDto: LoginDto) {
        return await this.loginService.login(loginDto);
    }
}
