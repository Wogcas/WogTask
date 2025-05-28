import { Injectable } from "@nestjs/common";
import { User } from "src/shared/entities/user.entity";
import { RegisterDTO } from "src/shared/grpc/register";
const bcrypt = require('bcryptjs');

@Injectable()
export class UserMapperService {
    mapDtoToUser(dto: RegisterDTO): User {
        const user = new User();
        user.username = dto.username;
        user.password = bcrypt.hashSync(dto.password, 10);
        user.email = dto.email.toLowerCase().trim();
        user.firstname = dto.firstname;
        user.lastname = dto.lastname;
        return user;
    }
    
}
