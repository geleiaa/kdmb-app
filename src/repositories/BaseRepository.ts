import { Model } from "mongoose";
import { FilterOptions, IBaseRepository } from "./IBaseRepository";
import { provide } from "inversify-binding-decorators";

@provide(BaseRepository)
export class BaseRepository<T> implements IBaseRepository<T>{
    
    protected model!: Model<T>;
    // constructor(protected model: Model<T>){
    // }
    
    async create(data: T): Promise<T | null> {
        const model = new this.model(data);
        const createdUser = await model.save();
        return createdUser;
    }

    async findAll(options: FilterOptions): Promise<T[]> {
        const data = await this.model.find(options);
        return data;
    }

    async findOne(options: FilterOptions): Promise<T | null> {
        return await this.model.findOne(options);
    }

    async findById(id: string): Promise<T | null> {
        return await this.model.findOne({ id });
    }

    async findByEmail(email: string): Promise<T | null> {
        return await this.model.findOne({ email });
    }

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