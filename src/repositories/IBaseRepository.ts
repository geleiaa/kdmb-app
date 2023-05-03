//import { FlattenMaps } from "mongoose";

//export type WithId<T extends FlattenMaps<T>> = { id: string, createdAt: Date, updatedAtts: Date } & T;

export type FilterOptions = Record<string, unknown>;

export interface IBaseRepository<T> {
    create(data: T): Promise<T | null>;
    findAll(options: FilterOptions): Promise<T[]>;
    findOne(options: FilterOptions): Promise<T | null>;
    findById(id: string): Promise<T | null>;
    findByEmail(email: string): Promise<T | null>;
    findByName(name: string): Promise<T | null>;
    //update(id: T): T | null;
}
