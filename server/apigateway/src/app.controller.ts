import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRegisterDTO } from './dtos/user-register.dto';
import { UserLoginDTO } from './dtos/user-login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async registerUser(@Body() userDTO: UserRegisterDTO) {
    try {
      return this.appService.registerUser(userDTO);
    } catch (error) {
      throw error;
    }
  }

  @Post('login')
  async loginUser(@Body() userDTO: UserLoginDTO) {
    try {
      return this.appService.loginUser(userDTO);
    } catch (error) {
      throw error;
    }
  }

}
