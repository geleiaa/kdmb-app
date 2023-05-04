export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export interface ICreateUserReturn {
    //id: string;
    name: string;
    status: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    name: string;
    token: string;
    status: string;
}