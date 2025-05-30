import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserMapperService } from './mapper/user-mapper.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDTO } from 'src/shared/grpc/register';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

@Injectable()
export class RegisterService {

    constructor(
        private readonly userMapper: UserMapperService,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async createUser(registerDto: RegisterDTO): Promise<User> {
        try {
            await this.validateEmailDoesNotExist(registerDto.email);
            await this.validateUsernameDoesNotExist(registerDto.username);
            const user = this.userMapper.mapDtoToUser(registerDto);
            return await this.userRepository.save(user);
        } catch (error) {
            throw error;
        }
    }

    private async validateEmailDoesNotExist(email: string): Promise<void> {
        const existingUser = await this.userRepository.findOne({ where: { email } });
        if (existingUser) {
            throw new RpcException({
                code: status.ALREADY_EXISTS,
                message: 'Email already exists',
            });
        }
    }

    private async validateUsernameDoesNotExist(username: string): Promise<void> {
        const existingUser = await this.userRepository.findOne({ where: { username } });
        if (existingUser) {
            throw new RpcException({
                code: status.ALREADY_EXISTS,
                message: 'Username already exists',
            });
        }
    }

}
