import { Model } from "mongoose";
import { ICreateUser } from "./dto/ICreateUserDTO";
import { IUser } from "@entities/Users";
import { provide } from "inversify-binding-decorators";
import { UserModel } from "@entities/Users";
import { FilterOptions, IUsersRepository } from "./IUserRepository";

@provide(UserRepository)
class UserRepository implements IUsersRepository {
    // protected model: Model<IUser>;

    // constructor() {
    //     this.model = UserModel;
    // }

    async createUser({ name, email, password }: ICreateUser): Promise<IUser> {
        const createdUser = await UserModel.create({ name, email, password });
        //const createdUser = await model.save();
        console.log('Repo =>', createdUser);

        return createdUser;
    }

    async findAll(query: FilterOptions): Promise<IUser[]> {
        const users = await UserModel.find(query);
        return users;
    }

    async findById(id: string): Promise<IUser | null> {
        return await UserModel.findOne({ id });
    }

    async findByEmail(email: string): Promise<IUser | null> {
        //const model = new this.model()
        return await UserModel.findOne({ email })
    }
}

export { UserRepository };