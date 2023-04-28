import { FilterQuery, Model } from "mongoose";
import { IBaseRepository } from "./IBaseRepository";

export class BaseRepository<T> implements IBaseRepository<T>{
    constructor(protected model = Model<T>) { }

    async create(data: T): Promise<T | null> {
        try {
            const model = new this.model(data)
            const createUser = await model.save();
            return createUser;
        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return null;
        }
    }

    async findAll(query: FilterQuery<T>): Promise<T[]> {
        try {
            const users = await this.model.find(query);
            return users;
        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return [];
        }
    }

    async findById(id: string): Promise<T | null> {
        try {
            return await this.model.findOne({ id });

        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return null;
        }
    }

    async findByEmail(email: string): Promise<T | null> {
        try {
            return await this.model.findOne({ email })

        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return null;
        }
    }
}