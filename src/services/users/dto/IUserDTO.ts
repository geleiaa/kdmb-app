export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export interface ICreateUserReturn {
    id: string;
    email: string;
    name: string;
    status: string;
}

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
