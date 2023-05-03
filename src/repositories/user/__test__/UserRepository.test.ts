import 'reflect-metadata';
import { UserRepository } from "../UserRepository";


const userRepo = new UserRepository();

describe('User Repository Test', () => {
    it('test do create', async () => {
        const defaultUser = {
            name: "TestFunct3",
            email: "testfunct3@mail.com",
            password: "1234567"
        };

        const user = await userRepo.create(defaultUser);
        console.log('repo create =>', user);
        

        expect(user).toEqual(expect.objectContaining({...defaultUser, ...{ _id: expect.any(String)}}));
    });

    it('deve achar um user pelo email', async () => {

        const userEmail = 'testfunct3@mail.com';

        const user = await userRepo.findByEmail(userEmail);
        console.log('user email =>', user);

        expect(user).toEqual(expect.objectContaining({ email: expect.any(String)}));
    });
})