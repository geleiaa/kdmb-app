import { StatusCode } from "@expressots/core";
import { ILogin, ILoginResponse } from "./IUserLoginDTO";
import { LoginUserService } from "@useCases/users/login/LoginUserService";
import {
    controller,
    httpPost,
    requestBody,
    response,
} from "inversify-express-utils";
import { Response } from "express";

@controller("/users/login")
class LoginUserController {
    constructor(private loginUserService: LoginUserService) { }

    @httpPost("/")
    async execute(
        @requestBody() data: ILogin,
        @response() res: Response,
    ): Promise<ILoginResponse | Response> {
        const user = await this.loginUserService.execute(data);

        return res
            .cookie('auth-token', user?.token, {
                httpOnly: true
            })
            .status(StatusCode.OK).json({
                token: user?.token,
                name: user?.name,
                message: "Você logou!!"
            });
    }
}

export { LoginUserController };
