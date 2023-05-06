import "reflect-metadata";
import { CreateUserService } from "@services/users/create/CreateUserService";
import { UserRepository } from "@repositories/user/UserRepository";
import { HashProvider } from "@providers/hashes/BcryptHashGen";

//jest.mock('@repositories/user/UserRepository');

const userRepo = new UserRepository();
const hashProv = new HashProvider();

const userCreate = new CreateUserService(userRepo, hashProv);

describe("Create User Service", () => {
    it("deve criar um usuário", async () => {
        const defaultUser = {
            name: "Test4",
            email: "teste4@mail.com",
            password: "1234567",
        };

        const user = await userCreate.execute(defaultUser);
        console.log("service create =>", user);

        expect(user).toEqual(
            expect.objectContaining({
                ...defaultUser,
                ...{ password: expect.any(String) },
            }),
        );
    });
});
