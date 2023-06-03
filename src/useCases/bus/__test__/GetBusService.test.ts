import { ApiSptProvider } from "@providers/apiSPT/ApiSptProvider";
import { GetBusForecastService } from "../get_bus_forecast/GetBusForecastService";

const busForecast = {
    hr: "13:09",
    p: {
        cp: 70016561,
        np: "GETULIO VARGAS B/C",
        py: -23.558836,
        px: -46.653843,
        l: [
            {
                c: "6475-10",
                cl: 1317,
                sl: 1,
                lt0: "TERM. BANDEIRA",
                lt1: "JD. VAZ DE LIMA",
                qv: 2,
                vs: [
                    {
                        p: "77856",
                        t: "13:29",
                        a: true,
                        ta: "2023-06-03T16:08:50Z",
                        py: -23.60453,
                        px: -46.696156666666667,
                        sv: null,
                        is: null
                    },
                    {
                        p: "77857",
                        t: "14:01",
                        a: true,
                        ta: "2023-06-03T16:08:36Z",
                        py: -23.658201666666667,
                        px: -46.764793333333337,
                        sv: null,
                        is: null
                    }
                ]
            }
        ]
    }
}

const apiSPTProvider = new ApiSptProvider();
const getForecast = new GetBusForecastService(apiSPTProvider);

describe("Teste do Get Lines", () => {
    it("deve return um obj com a linha", async () => {
        const lineData = getForecast.normalizeForecastData([busForecast]);

        console.log("line =>", lineData);

        expect(lineData).toEqual(
            expect.arrayContaining([
                {
                    hratual: expect.any(String),
                    previsao: expect.any(String),
                    paradaId: expect.any(Number),
                    parada: expect.any(String),
                },
            ]),
        );
    });
});
