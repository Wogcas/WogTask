export interface RegisterResponse {
    user: UserInfo;
    message: string;
}

export interface UserInfo {
    id: number;
    username: string;
}
