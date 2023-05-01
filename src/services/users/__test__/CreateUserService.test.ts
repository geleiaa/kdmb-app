import 'reflect-metadata';
import { CreateUserService } from '@services/users/create/CreateUserService';
import { UserRepository } from '@repositories/user/UserRepository';
//import { HashProvider } from '@providers/hashes/BcryptHashGen';

jest.mock('@repositories/user/UserRepository');

const userRepo = new UserRepository();
//const hashProv = new HashProvider();

const userCreate = new CreateUserService(userRepo);

describe('Create User Service', () => {
    it('deve criar um usuário', async () => {
        const defaultUser = {
            name: "TestUnit",
            email: "unit@mail.com",
            password: "12345"
        };

        const user = await userCreate.execute(defaultUser);
        console.log('=>', user);

        expect(user).toEqual(expect.objectContaining({ id: expect.any(String)}));
    })
})