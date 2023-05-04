import { IBusao } from "@entities/Busao";
import { ICreateBusDTO, ICreateBusReturnDTO } from "@services/bus/dto/CreateBusDTO";
import { CreateBusService } from "@services/bus/create/CreateBusService";
import { controller, httpPost, requestBody, response } from "inversify-express-utils";
import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";

@controller('/bus/create')
class BusCreateController {
    constructor(private createBusService: CreateBusService){}

    @httpPost('/', AuthMiddleware)
    async execute(@requestBody() data: ICreateBusDTO, @response() res: any): Promise<ICreateBusReturnDTO | null >{
        const busCreated = await this.createBusService.execute(data);
        return res.send(busCreated);
    }
}

export { BusCreateController };