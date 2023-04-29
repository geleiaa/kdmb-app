import { UserRepository } from "@repositories/user/userRepository";
import { ICreateUser, ICreateUserReturn } from "./dto/ICreateUserDTO";
import { HashProvider } from '@providers/hashes/BcryptHashGen';
import { AppError } from "@providers/error/AppError";


export class CreateUserService {
    constructor(private userRepo: UserRepository, private hashProvider: HashProvider) {}

    async execute({ name, email, password }: ICreateUser): Promise<ICreateUserReturn> {
        
        const userExists = await this.userRepo.findByEmail(email);

        if(userExists) {
            throw new AppError('Email ja cadastrado', 400);
        }

        const hashPassword = await this.hashProvider.hashPass(password);

        const user = await this.userRepo.create({
            name,
            email,
            password: hashPassword
        }); // <-- fix type

        return user;
    }
}