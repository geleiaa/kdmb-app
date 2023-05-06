import { provide } from "inversify-binding-decorators";
import { busModel } from "../../entities/Busao";
import { BaseRepository } from "@repositories/BaseRepository";
import { IBusao } from "../../entities/Busao";

@provide(BusaoRepository)
export class BusaoRepository extends BaseRepository<IBusao> {
    constructor() {
        super();
        this.model = busModel;
    }
}
