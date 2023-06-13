import {
    ICreateBusDTO,
    ICreateBusReturnDTO,
} from "@useCases/bus/create/ICreateBusDTO";
import { CreateBusService } from "@useCases/bus/create/CreateBusService";
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
    constructor(private createBusService: CreateBusService) { }

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
