import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";
import { IFindAllBusResponseDTO } from "@services/bus/dto/CreateBusDTO";
import { FindAllBusService } from "@services/bus/find/FindAllBusService";
import { controller, httpGet, request, requestHeaders, response } from "inversify-express-utils";


@controller('/bus')
class FindAllBusController {
    constructor(private findAllBus: FindAllBusService){}

    @httpGet('/', AuthMiddleware)
    async execute(@requestHeaders() reqHead: any, @request() req: any, @response() res: any): Promise<IFindAllBusResponseDTO> {
        const allBus = await this.findAllBus.execute(reqHead.decoded.sub);

        return res.send(allBus);
    }
}

export { FindAllBusController };
