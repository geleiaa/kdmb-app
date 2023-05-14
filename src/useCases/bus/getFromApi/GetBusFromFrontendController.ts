//import { AuthMiddleware } from "@providers/middlewares/AuthMiddleware";
import { GetApiSptService } from "useCases/bus/getFromApi/GetApiSptService";
import {
    controller,
    httpGet,
    requestParam,
    response,
} from "inversify-express-utils";

@controller("/bus/get-bus")
class GetBusFromFrontend {
    constructor(private getApiService: GetApiSptService) {}

    @httpGet("/:line")
    async execute(
        @requestParam("line") line: string,
        @response() res: any,
    ): Promise<any> {
        const busao = await this.getApiService.execute(line);

        res.send(busao.data);
    }
}

export { GetBusFromFrontend };
