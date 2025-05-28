export interface LoginResponse {
    token: string;
    user: UserLogged;
}

export interface UserLogged {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
}