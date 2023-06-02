import { ApiSptProvider } from "@providers/apiSPT/ApiSptProvider";
import { provide } from "inversify-binding-decorators";
import { BusForecastNormalized, GetForecastReturn } from "./GetBusForecastDTO";
import { AppError, Report, StatusCode } from "@expressots/core";

@provide(GetBusForecastService)
class GetBusForecastService {
    constructor(private apiProvider: ApiSptProvider) {}

    private async getForecastFromApi(
        busStop: number,
        busLine: number,
    ): Promise<GetForecastReturn | undefined> {
        try {
            return await this.apiProvider.GetForecast(busStop, busLine);
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

    public async fetchForecastBusData(
        busStop: number,
        busLine: number,
    ): Promise<BusForecastNormalized> {
        const lineForecast = await this.getForecastFromApi(busStop, busLine);

        console.log("fetchData", lineForecast);

        return this.normalizeForecastData([{ lineForecast }]);
    }

    public normalizeForecastData(data: any): BusForecastNormalized {
        const forecastData = data.map((fore: any) => ({
            hratual: fore.hr,
            previsao: fore.p.l[0].vs[0].t,
            paradaId: fore.p.cp,
            parada: fore.p.np,
        }));

        console.log("nomalized =>", forecastData);

        return forecastData;
    }
}

export { GetBusForecastService };
