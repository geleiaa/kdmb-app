import { IUser } from "@entities/Users";
import { ICreateUser } from "./dto/ICreateUserDTO";

export type FilterOptions = Record<string, unknown>;

export interface IUsersRepository {
    createUser({ name, email, password }: ICreateUser): Promise<IUser>;
    findAll(query: FilterOptions): Promise<IUser[]>;
    findById(id: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
}
