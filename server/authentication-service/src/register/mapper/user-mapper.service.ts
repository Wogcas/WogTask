import { Injectable } from "@nestjs/common";
import { RegisterDto } from "../register.interface";
import { User } from "src/shared/entities/user.entity";
const bcrypt = require('bcryptjs');

@Injectable()
export class UserMapperService {
    mapDtoToUser(dto: RegisterDto): User {
        const user = new User();
        user.username = dto.username;
        user.password = bcrypt.hashSync(dto.password, 10);
        user.email = dto.email.toLowerCase().trim();
        user.firstname = dto.firstname;
        user.lastname = dto.lastname;
        return user;
    }
    
}
