import { IBusao, busModel } from "../../models/Busao";
import { BaseRepository } from "../BaseRepository";

export class BusaoRepository extends BaseRepository<IBusao> {
    constructor() {
        super();
        this.model = busModel;
    }
}