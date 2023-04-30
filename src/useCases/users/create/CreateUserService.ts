import { UserRepository } from "@repositories/user/UserRepository";
import { ICreateUser, ICreateUserReturn } from "@repositories/user/dto/ICreateUserDTO";
import { HashProvider } from '@providers/hashes/BcryptHashGen';
import { AppError } from "@providers/error/AppError";
import { provide } from "inversify-binding-decorators";

@provide(CreateUserService)
class CreateUserService {
    constructor(private userRepo: UserRepository, private hashProvider: HashProvider) {}

    async execute({ name, email, password }: ICreateUser): Promise<ICreateUserReturn | null> {

        const userExists = await this.userRepo.findByEmail(email);

        if(userExists) {
            throw new AppError('Email ja cadastrado', 400);
        }

        const hashPassword = await this.hashProvider.hashPass(password);

        const user = await this.userRepo.create({ name, email, password: hashPassword });

        return user;
    }
}

export { CreateUserService };