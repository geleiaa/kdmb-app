import { UserRepository } from "@repositories/user/UserRepository";
import { LoginUserService } from "../login/LoginUserService"
import { HashProvider } from "@providers/hashes/BcryptHashGen";
import { JwtTokenProvider } from "@providers/jwt/JwtTokenProvider";
import { CreateUserService } from "../create/CreateUserService";

const userRepo = new UserRepository();
const hashProv = new HashProvider();
const jwtProv = new JwtTokenProvider();

const userCreate = new CreateUserService(userRepo, hashProv);

const userLogin = new LoginUserService(userRepo, hashProv, jwtProv);

describe('Login Service', () => {
    it('deve retornar um token', async () => {

        const defaultUser = {
            name: 'TestLogin',
            email: 'usrlg@mail.com',
            password: '1234567'
        }

        const createdUser = await userCreate.execute(defaultUser);
        console.log('user created =>', createdUser);
        

        const login = await userLogin.execute({ email: defaultUser.email, password: defaultUser.password });
        console.log('login =>', login);
        

        expect(login).toEqual(expect.objectContaining({ token: expect.any(String) }));

    });
})