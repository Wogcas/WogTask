export interface RegisterResponse {
    user: UserInfo;
}

export interface UserInfo {
    id: number;
    username: string;
}

export interface RegisterDTO {
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
}