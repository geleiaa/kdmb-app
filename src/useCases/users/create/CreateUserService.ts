import { UserRepository } from "@repositories/user/UserRepository";
import { ICreateUser, ICreateUserReturn } from "./IUserCreateDTO";
import { HashProvider } from "@providers/hashes/BcryptHashGen";
import { provide } from "inversify-binding-decorators";
import { AppError, Report, StatusCode } from "@expressots/core";

@provide(CreateUserService)
class CreateUserService {
    constructor(
        private userRepo: UserRepository,
        private hashProvider: HashProvider,
    ) { }

    async execute({
        name,
        email,
        password,
    }: ICreateUser): Promise<ICreateUserReturn | undefined> {
        try {
            const userExists = await this.userRepo.findByEmail(email);

            if (userExists) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest,
                        "Email ja cadastrado",
                        "create-user-service",
                    ),
                );
            }

            const hashedPass = await this.hashProvider.hashPass(password);

            const user = await this.userRepo.create({
                name,
                email,
                password: hashedPass,
            });

            let resp = {
                id: user?.id as string,
                name: user?.name as string,
                email: user?.email as string
            };

            return resp;
        } catch (error) {
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    "Algo deu errado!",
                    "create-user-service",
                ),
            );
        }
    }
}

export { CreateUserService };
