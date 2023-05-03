import { IBusao } from "@entities/Busao";
import { AppError } from "@providers/error/AppError";
import { BusaoRepository } from "@repositories/bus/BusaoRepository";
import { ICreateBusDTO } from "@repositories/bus/dto/CreateBusDTO";
import { provide } from "inversify-binding-decorators";

@provide(CreateBusService)
class CreateBusService {

    constructor(private busRepo: BusaoRepository) {}

    async execute({ name, linha, direcao }: ICreateBusDTO): Promise<IBusao | null> {

        const busExists = await this.busRepo.findByName(name);

        if(busExists) {
            throw new AppError('Busão ja cadastrado!!', 400);
        }

        const busao = await this.busRepo.create({ name, linha, direcao });

        return busao;
    }
}

export { CreateBusService };