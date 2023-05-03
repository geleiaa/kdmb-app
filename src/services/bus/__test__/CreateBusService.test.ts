import { CreateBusService } from "@services/bus/create/CreateBusService"
import { BusaoRepository } from "../../../repositories/bus/BusaoRepository";

const busRepo = new BusaoRepository();

const busCreate = new CreateBusService(busRepo);

beforeEach(async () => {
    await busRepo.deleteAll();
})

describe('Create Busao Service', () => {
    it('deve criar um busao', async () => {
        const defaultBus = {
            name: "Jd. âNgela",
            linha: "737A-10",
            direcao: 2
        }

        const busao = await busCreate.execute(defaultBus);
        console.log('servi create =>', busao);

        expect(busao).toEqual(expect.objectContaining({ ...{ _id: expect.any(String)}, ...defaultBus}));

    })
})