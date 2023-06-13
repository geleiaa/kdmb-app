import { AppError, Report, StatusCode } from "@expressots/core";
import { ApiSptProvider } from "@providers/apiSPT/ApiSptProvider";
import { provide } from "inversify-binding-decorators";
import {
    BusInfoNormalized,
    GetLineReturn,
    GetStopsReturn,
} from "./IGetBusDataDTO";

@provide(GetBusDataService)
class GetBusDataService {
    constructor(private apiProvider: ApiSptProvider) { }

    private async getLineFromApi(
        line: string,
        direction: number,
    ): Promise<GetLineReturn | undefined> {
        try {
            return await this.apiProvider.GetLines(line, direction);
        } catch (err) {
            console.log(err);
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    "algo deu errado!!",
                    "lines-bus",
                ),
            );
        }
    }

    private async getStopsFromApi(
        line: string,
        direction: number,
    ): Promise<GetStopsReturn | undefined> {
        try {
            return await this.apiProvider.GetStops(line, direction);
        } catch (err) {
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    "algo deu errado!!",
                    "stops-bus",
                ),
            );
        }
    }

    public async fetchBusData(
        line: string,
        direction: number,
    ): Promise<BusInfoNormalized[]> {
        const lineData = await this.getLineFromApi(line, direction);
        const stopsData = await this.getStopsFromApi(line, direction);

        return this.normalizeBusData([{ lineData, stopsData }]);
    }

    private normalizeBusData(data: any[]): BusInfoNormalized[] {
        return data.map((bus) => ({
            lineId: bus.lineData.cl,
            name: bus.lineData.tp,
            linha: bus.lineData.lt + "-" + bus.lineData.tl,
            direcao: bus.lineData.sl,
            paradas: bus.stopsData,
        }));
    }
}

export { GetBusDataService };
