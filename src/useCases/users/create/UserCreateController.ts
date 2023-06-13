import {
    ICreateUser,
    ICreateUserReturn,
} from "@useCases/users/create/IUserCreateDTO";
import { CreateUserService } from "@useCases/users/create/CreateUserService";
import {
    controller,
    httpPost,
    requestBody,
    response,
} from "inversify-express-utils";
import { StatusCode } from "@expressots/core";

@controller("/users/sign-on")
class UserCreateController {
    constructor(private createUserService: CreateUserService) { }

    @httpPost("/")
    async execute(
        @requestBody() data: ICreateUser,
        @response() res: any,
    ): Promise<ICreateUserReturn> {
        const userCreate = await this.createUserService.execute(data);
        return res.send({
            name: userCreate?.name,
            status: StatusCode.Created,
            message: "Usuário criado!",
        });
    }
}

export { UserCreateController };
