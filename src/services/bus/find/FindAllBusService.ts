//import { IBusao } from "@entities/Busao";
import { AppError, Report, StatusCode } from "@expressots/core";
import { BusaoRepository } from "@repositories/bus/BusaoRepository";
import { provide } from "inversify-binding-decorators";
import { IBusao } from "@entities/Busao";

@provide(FindAllBusService)
class FindAllBusService {
    constructor(private busRepo: BusaoRepository){}

    async execute(id: string): Promise<IBusao | null> {
        try{
            const busoes = await this.busRepo.findAll({ userId: id }, ['userId']);            

            if(!busoes) {
                Report.Error( new AppError(StatusCode.NotFound, 'algo deu errado!!', 'find-all-bus'));
            }

            return busoes;

        } catch(error) {
            throw error
        }
    }
}

export { FindAllBusService };
