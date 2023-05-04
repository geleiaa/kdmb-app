import { StatusCode } from "@expressots/core";
import { ILogin, ILoginResponse } from "@services/users/dto/ICreateUserDTO";
import { LoginUserService } from "@services/users/login/LoginUserService";
import { Response } from "express";
import { controller, httpPost, requestBody, response } from "inversify-express-utils";


@controller('/users/login')
class LoginUserController {
    constructor(private loginUserService: LoginUserService) {}

    @httpPost('/')
    async execute(@requestBody() data: ILogin, @response() res: Response): Promise<ILoginResponse | Response> {
        const userLogged = await this.loginUserService.execute(data);
        return res.send({ name: userLogged?.name, token: userLogged?.token, status: StatusCode.OK, message: 'Você logou!!' });
    }
}

export { LoginUserController };