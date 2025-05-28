import { UserRegisterDTO } from "src/dtos/user-register.dto";
import { RegisterResponse } from "./responses/register";
import { LoginResponse } from "./responses/login";
import { UserLoginDTO } from "src/dtos/user-login.dto";
import { Observable } from "rxjs";

export interface GrpcAuthInterface {
    Register(userDTO: UserRegisterDTO): Observable<RegisterResponse>;
    Login(userDTO: UserLoginDTO): Observable<LoginResponse>;
}