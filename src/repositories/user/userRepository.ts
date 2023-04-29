import { IUser, UserModel } from "@models/Users";
import { BaseRepository } from "@repositories/BaseRepository";

export class UserRepository extends BaseRepository<IUser> {
    constructor() {
        super();
        this.model = UserModel;
    }
}