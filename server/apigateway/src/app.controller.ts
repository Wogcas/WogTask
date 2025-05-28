import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRegisterDTO } from './dtos/user-register.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async registerUser(@Body() userDTO: UserRegisterDTO) {
    return this.appService.registerUser(userDTO);
  }

}
