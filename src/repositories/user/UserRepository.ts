import { IUser } from "@entities/Users";
import { provide } from "inversify-binding-decorators";
import { UserModel } from "@entities/Users";
import { BaseRepository } from "@repositories/BaseRepository";


@provide(UserRepository)
class UserRepository extends BaseRepository<IUser> {

    constructor() {
        super();
        this.model = UserModel;
    }
}

export { UserRepository };