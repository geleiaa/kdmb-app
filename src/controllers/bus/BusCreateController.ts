import { IBusao } from "@entities/Busao";
import {
    ICreateBusDTO,
    ICreateBusReturnDTO,
} from "@services/bus/dto/CreateBusDTO";
import { CreateBusService } from "@services/bus/create/CreateBusService";
import {
    controller,
    httpPost,
    requestBody,
    requestHeaders,
    response,
} from "inversify-express-utils";
import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";

@controller("/bus/create")
class BusCreateController {
    constructor(private createBusService: CreateBusService) {}

    @httpPost("/", AuthMiddleware)
    async execute(
        @requestBody() data: ICreateBusDTO,
        @requestHeaders("decoded") req: any,
        @response() res: any,
    ): Promise<ICreateBusReturnDTO | null> {
        data.userId = req.sub; // userId no token

        const busCreated = await this.createBusService.execute(data);
        return res.send(busCreated);
    }
}

export { BusCreateController };
