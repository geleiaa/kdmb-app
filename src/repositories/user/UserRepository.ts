import { Model } from "mongoose";
import { FilterOptions, IUserRepository } from "./IUserRepository";
import { ICreateUser } from "./dto/ICreateUserDTO";
import { IUser } from "@entities/Users";
import { provide } from "inversify-binding-decorators";

@provide(UserRepository)
export class UserRepository implements IUserRepository<IUser> {
    constructor(protected model = Model) { }

    async create(data: ICreateUser): Promise<IUser | null> {
        try {
            const model = new this.model(data)
            const createUser = await model.save();
            return createUser;
        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return null;
        }
    }

    async findAll(query: FilterOptions): Promise<IUser[]> {
        try {
            const users = await this.model.find(query);
            return users;
        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return [];
        }
    }

    async findById(id: string): Promise<IUser | null> {
        try {
            return await this.model.findOne({ id });

        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return null;
        }
    }

    async findByEmail(email: string): Promise<IUser | null> {
        try {
            return await this.model.findOne({ email })

        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.log(error);

            return null;
        }
    }
}