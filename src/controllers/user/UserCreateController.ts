import { IUser } from "@entities/Users";
import { ICreateUser, ICreateUserReturn } from "@services/users/dto/IUserDTO";
import { CreateUserService } from "@services/users/create/CreateUserService";
import {
    controller,
    httpPost,
    requestBody,
    response,
} from "inversify-express-utils";
import { StatusCode } from "@expressots/core";
import { Response } from "express";

@controller("/users/sign-on")
class UserCreateController {
    constructor(private createUserService: CreateUserService) {}

    @httpPost("/")
    async execute(
        @requestBody() data: ICreateUser,
        @response() res: Response,
    ): Promise<ICreateUserReturn | Response> {
        const userCreate = await this.createUserService.execute(data);
        return res.send({
            name: userCreate?.name,
            status: StatusCode.Created,
            message: "Usuário criado!",
        });
    }
}

export { UserCreateController };
