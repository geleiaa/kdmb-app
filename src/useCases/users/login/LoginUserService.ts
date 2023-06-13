import { provide } from "inversify-binding-decorators";
import { ILogin, ILoginResponse } from "./IUserLoginDTO";
import { UserRepository } from "@repositories/user/UserRepository";
import { HashProvider } from "@providers/hashes/BcryptHashGen";
import { JwtTokenProvider } from "@providers/jwt/JwtTokenProvider";
import { AppError, Report, StatusCode } from "@expressots/core";

@provide(LoginUserService)
class LoginUserService {
    constructor(
        private userRepo: UserRepository,
        private hashProvider: HashProvider,
        private jwtProvider: JwtTokenProvider,
    ) { }

    async execute({ email, password }: ILogin): Promise<ILoginResponse | undefined> {
        try {
            const userExists = await this.userRepo.findByEmail(email);

            if (!userExists) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest,
                        "Email ou Senha incorreto!!",
                        "login service",
                    ),
                );
            }

            const checkPass = await this.hashProvider.compareHash(
                password,
                String(userExists?.password),
            );

            if (!checkPass) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest,
                        "Email ou Senha incorreto!!",
                        "login service",
                    ),
                );
            }

            const token = this.jwtProvider.generateToken(
                userExists?.id as string,
            );



            let resp = {
                token,
                name: userExists?.name as string,
                message: ""
            };

            return resp;
        } catch (error) {
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    "Algo de errado!",
                    "login service",
                ),
            );
        }
    }
}

export { LoginUserService };
