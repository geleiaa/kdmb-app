import { provide } from "inversify-binding-decorators";
import { ILogin, ILoginResponse } from "../dto/ICreateUserDTO";
import { UserRepository } from "@repositories/user/UserRepository";
import { HashProvider } from "@providers/hashes/BcryptHashGen";
import { JwtTokenProvider } from "@providers/jwt/JwtTokenProvider";

@provide(LoginUserService)
class LoginUserService {

    constructor(
        private userRepo: UserRepository,
        private hashProvider: HashProvider,
        private jwtProvider: JwtTokenProvider
    ) {}

    async execute({ email, password }: ILogin): Promise<ILoginResponse | null>{
        
        const userExists = await this.userRepo.findByEmail(email);

        if(!userExists) {

        }

        const checkPass = await this.hashProvider.compareHash(password, String(userExists?.password));

        if(!checkPass) {

        }

        const token = this.jwtProvider.generateToken(userExists?.name as string);

        let resp: ILoginResponse;

        resp = {
            token,
            name: userExists?.name as string,
            status: 'success'
        }; 

        return resp
    }
}

export { LoginUserService };