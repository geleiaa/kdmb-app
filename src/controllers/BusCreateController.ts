import { IBusao } from "@entities/Busao";
import { ICreateBusDTO } from "@repositories/bus/dto/CreateBusDTO";
import { CreateBusService } from "@services/bus/create/CreateBusService";
import { controller, httpPost, requestBody, response } from "inversify-express-utils";

@controller('/bus/create')
class BusCreateController {
    constructor(private createBusService: CreateBusService){}

    @httpPost('/')
    async execute(@requestBody() data: ICreateBusDTO, @response() res: any): Promise<IBusao | null >{
        const busCreated = await this.createBusService.execute(data);
        return res.send(busCreated);
    }
}

export { BusCreateController };