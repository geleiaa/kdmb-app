//import { FlattenMaps } from "mongoose";

import { FilterQuery, PopulateOptions } from "mongoose";

//export type WithId<T extends FlattenMaps<T>> = { id: string, createdAt: Date, updatedAtts: Date } & T;

//export type FilterOptions = Record<string, unknown>;

export interface IBaseRepository<T> {
    create(data: T): Promise<T | null>;
    findAll(options: FilterQuery<T>, populate: string[] | PopulateOptions | PopulateOptions[]): Promise<T | null>;
    findOne(options: FilterQuery<T>, populate: string[] | PopulateOptions | PopulateOptions[]): Promise<T | null>;
    findById(id: string): Promise<T | null>;
    findByEmail(email: string): Promise<T | null>;
    findByName(name: string): Promise<T | null>;
    //update(id: T): T | null;
    //delete(id: T): void;
}
