import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";
import { IFindAllBusResponseDTO } from "@services/bus/dto/CreateBusDTO";
import { FindAllBusService } from "@services/bus/find/FindAllBusService";
import { controller, httpGet, request, response } from "inversify-express-utils";


@controller('/bus')
class FindAllBusController {
    constructor(private findAllBus: FindAllBusService){}

    @httpGet('/', AuthMiddleware)
    async execute(@request() req: any, @response() res: any): Promise<IFindAllBusResponseDTO> {
        const allBus = await this.findAllBus.execute();

        return res.send(allBus);
    }
}

export { FindAllBusController };
