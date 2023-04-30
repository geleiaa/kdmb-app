import { IBusao, busModel } from "../../entities/Busao";

export class BusaoRepository extends IBusaoRepository<IBusao> {
    constructor() {
        super();
        this.model = busModel;
    }
}