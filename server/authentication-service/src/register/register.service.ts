import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserMapperService } from './mapper/user-mapper.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './register.interface';

@Injectable()
export class RegisterService {

    constructor(
        private readonly userMapper: UserMapperService,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async createUser(registerDto: RegisterDto): Promise<User> {
        try {
            await this.validateEmailDoesNotExist(registerDto.email);
            await this.validateUsernameDoesNotExist(registerDto.username);
            const user = this.userMapper.mapDtoToUser(registerDto);
            return await this.userRepository.save(user);
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
            throw new InternalServerErrorException({
                statusCode: 500,
                message: 'An unexpected error occurred creating the user',
                error: 'Internal Server Error'
            });
        }
    }

    private async validateEmailDoesNotExist(email: string): Promise<void> {
        const existingUser = await this.userRepository.findOne({ where: { email } });
        if (existingUser) {
            throw new ConflictException({
                statusCode: 409,
                message: 'Email already exists',
                error: 'Conflict'
            });
        }
    }

    private async validateUsernameDoesNotExist(username: string): Promise<void> {
        const existingUser = await this.userRepository.findOne({ where: { username } });
        if (existingUser) {
            throw new ConflictException({
                statusCode: 409,
                message: 'Username already exists',
                error: 'Conflict'
            });
        }
    }

}
