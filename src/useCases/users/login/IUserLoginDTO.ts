export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    name: string;
    message: string;
}
