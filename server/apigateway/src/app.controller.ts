import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRegisterDTO } from './dtos/user-register.dto';
import { UserLoginDTO } from './dtos/user-login.dto';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async registerUser(@Body() userDTO: UserRegisterDTO) {
    return lastValueFrom(await this.appService.registerUser(userDTO));
  }

  @Post('login')
  async loginUser(@Body() userDTO: UserLoginDTO) {
    return lastValueFrom(await this.appService.loginUser(userDTO));
  }

}
