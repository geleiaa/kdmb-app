import { BusaoRepository } from "@repositories/bus/BusaoRepository";
import { CreateBusService } from "../create/CreateBusService";
import { UserRepository } from "@repositories/user/UserRepository";
import { HashProvider } from "@providers/hashes/BcryptHashGen";
import { CreateUserService } from "@services/users/create/CreateUserService";
import { FindAllBusService } from "../find/FindAllBusService";

const userRepo = new UserRepository();
const hashProv = new HashProvider();

const userCreate = new CreateUserService(userRepo, hashProv);

const defaultUser = {
    name: "User Test",
    email: "testbus@mail.com",
    password: "1234567",
};

const busRepo = new BusaoRepository();
const busCreate = new CreateBusService(busRepo);

const findAllBus = new FindAllBusService(busRepo);

beforeEach(async () => {
    await busRepo.deleteAll();
    await userRepo.deleteAll();
});

describe('Find All Busoes Service', () => {
    it('deve retornar todos os busões embedded com user', async () => {

        const user = await userCreate.execute(defaultUser);
    
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
            userId: user?.id as string,
        };

        await busCreate.execute(defaultBus);
        await busCreate.execute(defaultBus2);
        

        const allBus = await findAllBus.execute();
        console.log('all bus', allBus);

        expect(allBus).toEqual(expect.arrayContaining([expect.objectContaining ({defaultBus, defaultBus2, defaultUser})]));

    })
})