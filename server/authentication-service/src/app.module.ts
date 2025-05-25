import { Module } from '@nestjs/common';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [RegisterModule, LoginModule, SharedModule],
  controllers: [RegisterController, LoginController],
  providers: [RegisterService, LoginService],
})
export class AppModule { }
