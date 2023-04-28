import { FilterQuery } from "mongoose";


export interface IBaseRepository<T> {
    create(data: T): Promise<T | null>;
    findAll(query: FilterQuery<T>): Promise<T[] | null>;
    findById(id: string): Promise<T | null>;
    findByEmail(email: string): Promise<T | null>;
}