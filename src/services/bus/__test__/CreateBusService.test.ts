import { CreateBusService } from "@services/bus/create/CreateBusService";
import { BusaoRepository } from "@repositories/bus/BusaoRepository";
import { CreateUserService } from "@services/users/create/CreateUserService";
import { HashProvider } from "@providers/hashes/BcryptHashGen";
import { UserRepository } from "@repositories/user/UserRepository";

const userRepo = new UserRepository();
const hashProv = new HashProvider();

const userCreate = new CreateUserService(userRepo, hashProv);

const defaultUser = {
    name: "TestBus",
    email: "testbus@mail.com",
    password: "1234567",
};

const busRepo = new BusaoRepository();
const busCreate = new CreateBusService(busRepo);

beforeEach(async () => {
    await busRepo.deleteAll();
});

describe("Create Busao Service", () => {
    it("deve criar um busao", async () => {
        const user = await userCreate.execute(defaultUser);

        const defaultBus = {
            name: "Jd. âNgela",
            linha: "737A-10",
            direcao: 2,
            userId: user?.id as string,
        };

        const busao = await busCreate.execute(defaultBus);

        expect(busao).toEqual(
            expect.objectContaining({ ...{ name: expect.any(String) } }),
        );
    });

    it("deve retornar erro de busao ja cadastrado", async () => {
        const user = await userCreate.execute(defaultUser);

        const defaultBus = {
            name: "Jd. âNgela",
            linha: "737A-10",
            direcao: 2,
            userId: user?.id as string,
        };

        const busao1 = await busCreate.execute(defaultBus);
        const busao2 = await busCreate.execute(defaultBus);

        expect(busao2).toBeNull();
        expect(async () => await busCreate.execute(defaultBus)).toThrow(
            /^Busão ja cadastrado!!$/,
        );
    });
});
