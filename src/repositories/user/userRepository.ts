import { IUser, UserModel } from "../../models/Users";
import { BaseRepository } from "../BaseRepository";

export class UserRepository extends BaseRepository<IUser> {
    constructor() {
        super();
        this.model = UserModel;
    }
}