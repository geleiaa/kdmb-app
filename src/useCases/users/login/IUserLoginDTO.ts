export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    id: string;
    name: string;
    token: string;
    status: string;
}
