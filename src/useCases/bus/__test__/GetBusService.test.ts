import { ApiSptProvider } from "@providers/apiSPT/ApiSptProvider";
import { GetBusForecastService } from "../get_bus_forecast/GetBusForecastService";

const busForecast = [
    {
        hr: "20:09",
        p: {
            cp: 4200953,
            np: "PARADA ROBERTO SELMI DEI B/C",
            py: -23.675901,
            px: -46.752812,
            l: [
                {
                    c: "7021-10",
                    cl: 1989,
                    sl: 1,
                    lt0: "TERM. JOÃO DIAS",
                    lt1: "JD. MARACÁ",
                    qv: 1,
                    vs: [
                        {
                            p: "74558",
                            t: "23:11",
                            a: true,
                            ta: "2017-05-07T23:09:05Z",
                            py: -23.67603,
                            px: -46.75891166666667,
                        },
                    ],
                },
            ],
        },
    },
];

const apiSPTProvider = new ApiSptProvider();
const getForecast = new GetBusForecastService(apiSPTProvider);

describe("Teste do Get Lines", () => {
    it("deve return um obj com a linha", async () => {
        const lineData = getForecast.normalizeForecastData(busForecast);

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
