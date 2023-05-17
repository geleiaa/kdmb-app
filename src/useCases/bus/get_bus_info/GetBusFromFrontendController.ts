//import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";
import { GetApiSptService } from "@useCases/bus/get_bus_info/GetApiSptService";
import {
    controller,
    httpGet,
    requestParam,
    response,
} from "inversify-express-utils";

@controller("/bus")
class GetBusFromFrontend {
    constructor(private getApiService: GetApiSptService) {}

    @httpGet("/line/:line/direction/:dir")
    async execute(
        @requestParam("line") line: string,
        @requestParam("dir") dir: number,
        @response() res: any,
    ): Promise<any> {
        const busao = await this.getApiService.fetchData(line, dir);

        res.send(busao);
    }
}

export { GetBusFromFrontend };
