export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export interface ICreateUserReturn extends ICreateUser {
    id: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    name: string;
    token: string;
}