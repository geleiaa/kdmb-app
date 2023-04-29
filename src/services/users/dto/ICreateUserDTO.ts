export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export interface ICreateUserReturn {
    id: string;
    name: string;
    email: string;
}