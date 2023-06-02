import {
    controller,
    httpGet,
    requestParam,
    response,
} from "inversify-express-utils";
import { GetBusForecastService } from "@useCases/bus/get_bus_forecast/GetBusForecastService";

@controller("/bus")
class GetBusForecastController {
    constructor(private getForecastService: GetBusForecastService) {}

    @httpGet("/bus-stop/:stop/bus-line/:line")
    async execute(
        @requestParam("stop") stop: number,
        @requestParam("line") line: number,
        @response() res: any,
    ): Promise<any> {
        const busForecast = await this.getForecastService.fetchForecastBusData(
            stop,
            line,
        );

        res.send(busForecast);
    }
}

export { GetBusForecastController };
