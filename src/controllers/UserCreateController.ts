import { IUser } from "@entities/Users";
import { ICreateUser } from "@repositories/user/dto/ICreateUserDTO";
import { CreateUserService } from "@services/users/create/CreateUserService";
import { controller, httpPost, requestBody, response } from "inversify-express-utils";

@controller('/users/sign-on')
class UserCreateController {
    constructor(private createUserService: CreateUserService){}

    @httpPost('/')
    async execute(@requestBody() data: ICreateUser, @response() res: any): Promise<IUser | null> {
        const userCreated = await this.createUserService.execute(data);
        return res.send(userCreated);
    }
}

export { UserCreateController };