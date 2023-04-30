import { IBusao, busModel } from "../../models/Busao";

export class BusaoRepository extends IBusaoRepository<IBusao> {
    constructor() {
        super();
        this.model = busModel;
    }
}