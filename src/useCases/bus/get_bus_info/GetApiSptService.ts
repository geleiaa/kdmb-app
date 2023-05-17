import { AppError, Report, StatusCode } from "@expressots/core";
import { ApiSptProvider } from "@providers/apiSPT/ApiSptProvider";
import { provide } from "inversify-binding-decorators";
import {
    BusInfo,
    GetForecastReturn,
    GetLineReturn,
    GetStopsReturn,
} from "./GetApiSptDTO";

@provide(GetApiSptService)
class GetApiSptService {
    constructor(private apiProvider: ApiSptProvider) {}

    private async getLineFromApi(
        line: string,
        direcao: number,
    ): Promise<GetLineReturn[] | void> {
        try {
            return await this.apiProvider.GetLines(line, direcao);
        } catch (err) {
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
        direcao: number,
    ): Promise<GetStopsReturn[] | void> {
        try {
            return await this.apiProvider.GetStops(line, direcao);
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

    private async getForecastFromApi(
        line: string,
        direcao: number,
    ): Promise<GetForecastReturn[] | void> {
        try {
            return await this.apiProvider.GetForecast(line, direcao);
        } catch (err) {
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    "algo deu errado!!",
                    "forecast-bus",
                ),
            );
        }
    }

    public async fetchData(line: string, direcao: number): Promise<BusInfo[]> {
        const lineData = await this.getLineFromApi(line, direcao);
        const stopsData = await this.getStopsFromApi(line, direcao);
        const forecastData = await this.getForecastFromApi(line, direcao);

        return this.normalizeData([{ lineData, stopsData, forecastData }]);
    }

    private normalizeData(data: any[]): BusInfo[] {
        return data.map((bus) => ({
            name: bus.lineData.tp,
            linha: bus.lineData.lt + "-" + bus.lineData.tl,
            direcao: bus.lineData.sl,
            paradas: bus.stopsData,
            previsao: bus.forecastData,
        }));
    }
}

export { GetApiSptService };
