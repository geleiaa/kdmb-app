import { IUser } from "@entities/Users";
import { ICreateUser } from "./dto/ICreateUserDTO";
//import { FilterQuery } from "mongoose";

export type FilterOptions = Record<string, unknown>;

export interface IUserRepository<T> {
    create(data: ICreateUser): Promise<IUser | null>;
    findAll(query: FilterOptions): Promise<IUser[] | null>;
    findById(id: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
}