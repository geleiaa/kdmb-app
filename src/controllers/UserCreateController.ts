import { ICreateUser, ICreateUserReturn } from "@repositories/user/dto/ICreateUserDTO";
import { CreateUserService } from "@services/users/CreateUserService";
import { controller, httpPost, requestBody, response } from "inversify-express-utils";

@controller('/users/sign-on')
export class UserCreateController {
    constructor(private createUserService: CreateUserService){}

    @httpPost('/')
    async execute(@requestBody() data: ICreateUser, @response() res): Promise<ICreateUserReturn | null> {
        return await this.createUserService.execute(data);
    }
}