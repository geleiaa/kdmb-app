import { BusaoRepository } from "@repositories/bus/BusaoRepository";
import { CreateBusService } from "../create/CreateBusService";
import { UserRepository } from "@repositories/user/UserRepository";
import { HashProvider } from "@providers/hashes/BcryptHashGen";
import { CreateUserService } from "@useCases/users/create/CreateUserService";
import { FindAllBusService } from "../find/FindAllBusService";

const userRepo = new UserRepository();
const hashProv = new HashProvider();

const userCreate = new CreateUserService(userRepo, hashProv);

const defaultUser = {
    name: "User-1-Test",
    email: "user1@mail.com",
    password: "1234567",
};

const defaultUser2 = {
    name: "User-2-Test",
    email: "user2@mail.com",
    password: "1234567",
};

const busRepo = new BusaoRepository();
const busCreate = new CreateBusService(busRepo);

const findAllBus = new FindAllBusService(busRepo);

beforeEach(async () => {
    await busRepo.deleteAll();
    await userRepo.deleteAll();
});

describe("Find All Busoes Service", () => {
    it("deve retornar todos os busões junto com user", async () => {
        const user = await userCreate.execute(defaultUser);
        const user2 = await userCreate.execute(defaultUser2);

        const defaultBus = {
            name: "Jd. âNgela",
            linha: "737A-10",
            direcao: 2,
            userId: user?.id as string,
        };

        const defaultBus2 = {
            name: "Jd. Jangadeiro",
            linha: "737A-10",
            direcao: 2,
            userId: user2?.id as string,
        };

        const defaultBus3 = {
            name: "Jd. Caiçara",
            linha: "737A-10",
            direcao: 2,
            userId: user2?.id as string,
        };

        await busCreate.execute(defaultBus);
        await busCreate.execute(defaultBus2);
        await busCreate.execute(defaultBus3);

        const allBus = await findAllBus.execute(user2?.id as string);
        console.log("all bus", allBus);

        expect(allBus).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    defaultBus,
                    defaultBus2,
                    defaultUser,
                }),
            ]),
        );
    });
});
