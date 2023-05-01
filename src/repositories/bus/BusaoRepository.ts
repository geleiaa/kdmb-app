import { provide } from "inversify-binding-decorators";
import { IBusao, busModel } from "../../entities/Busao";

@provide(BusaoRepository)
class BusaoRepository implements IBusaoRepository {
    constructor() {}
}