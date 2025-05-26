import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { SharedModule } from 'src/shared/shared.module';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { UserMapperService } from './mapper/user-mapper.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), SharedModule],
    controllers: [RegisterController],
    providers: [RegisterService, UserMapperService]
})
export class RegisterModule { }
