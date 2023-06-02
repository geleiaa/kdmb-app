//import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";
import { GetBusDataService } from "@useCases/bus/get_bus_data/GetBusDataService";
import {
    controller,
    httpGet,
    requestParam,
    response,
} from "inversify-express-utils";

@controller("/bus")
class GetBusDataController {
    constructor(private getApiService: GetBusDataService) {}

    @httpGet("/line/:line/direction/:dir")
    async execute(
        @requestParam("line") line: string,
        @requestParam("dir") dir: number,
        @response() res: any,
    ): Promise<any> {
        const busao = await this.getApiService.fetchBusData(line, dir);

        res.send(busao);
    }
}

export { GetBusDataController };
