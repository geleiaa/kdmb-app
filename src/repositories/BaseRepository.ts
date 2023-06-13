import { FilterQuery, Model, PopulateOptions } from "mongoose";
import { IBaseRepository } from "./IBaseRepository";
import { provide } from "inversify-binding-decorators";

@provide(BaseRepository)
export class BaseRepository<T> implements IBaseRepository<T> {
    protected model!: Model<T>;
    // constructor(protected model: Model<T>){
    // }

    async create(data: T): Promise<T | null> {
        const model = new this.model(data);
        const createdUser = await model.save();
        return createdUser;
    }

    async findAll(
        query: FilterQuery<T>,
        populate: string[] | PopulateOptions | PopulateOptions[],
    ): Promise<T | null> {
        const data = await this.model
            .find(query)
            .populate(populate)
            .then((model) => model as T);

        return data;
    }

    async findOne(
        query: FilterQuery<T>,
        populate: string[] | PopulateOptions | PopulateOptions[],
    ): Promise<T | null> {
        const data = await this.model
            .findOne(query)
            .populate(populate)
            .then((model) => model as T);

        return data;
    }

    async findById(id: string): Promise<T | null> {
        return await this.model
            .findOne({ id })
            .select("+email");
    }

    async findByEmail(email: string): Promise<T | null> {
        return await this.model
            .findOne({ email })
            .select("+email")
            .select("+password");
    } // campos no-select no schema

    async findByName(name: string): Promise<T | null> {
        return await this.model.findOne({ name });
    }

    async deleteAll() {
        await this.model.deleteMany({});
    }

    // async update(id: T, fields: string): T | null {
    //     return await this.model.updateOne({ id }, fields);
    // }
}
