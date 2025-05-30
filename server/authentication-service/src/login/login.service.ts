import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { LoginDTO, LoginResponse } from 'src/shared/grpc/login';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';


@Injectable()
export class LoginService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    private async validateUser(email: string, password: string) {
        const user = await this.userRepository.findOne({
            where: { email }
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(loginDto: LoginDTO): Promise<LoginResponse> {
        const user = await this.validateUser(loginDto.email, loginDto.password);

        if (!user) {
            throw new RpcException({
                code: status.UNAUTHENTICATED,
                message: 'Invalid credentials'
            });
        }

        const payload = { email: user.email, sub: user.id };
        return {
            token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname
            }
        };
    }
}

