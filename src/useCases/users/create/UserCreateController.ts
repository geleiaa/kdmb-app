import { ICreateUser, ICreateUserReturn } from "@repositories/user/dto/ICreateUserDTO";
import { CreateUserService } from "./CreateUserService";
import { controller, httpPost, request, response } from "inversify-express-utils";

@controller('/users/sign-on')
class UserCreateController {
    constructor(private createUserService: CreateUserService){}

    @httpPost('/')
    async execute(@request() data: ICreateUser, @response() res): Promise<ICreateUserReturn | null> {
        const userCreated = await this.createUserService.execute(data);
        return res.send(userCreated);
    }
}

export { UserCreateController };