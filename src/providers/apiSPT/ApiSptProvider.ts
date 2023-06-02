import { AppError, Report, StatusCode } from "@expressots/core";
import axios from "axios";
import { provide } from "inversify-binding-decorators";

const url = "http://api.olhovivo.sptrans.com.br/v2.1";

@provide(ApiSptProvider)
class ApiSptProvider {
    async ApiAuth(): Promise<any> {
        try {
            const resp = await axios.post(
                `${url}/Login/Autenticar?token=${process.env.API_SPT_KEY}`,
            );
            return resp.headers["set-cookie"]; //auth cookie da api spt
        } catch (error) {
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    error as string,
                    "api-spt-provider",
                ),
            );
        }
    }

    async GetLines(line: string, direction: number): Promise<any> {
        try {
            const auth = await this.ApiAuth();
            const getLine = await axios.get(
                `${url}/Linha/Buscar?termosBusca=${line}`,
                {
                    headers: { Cookie: auth },
                },
            );

            if (direction == 1) return getLine.data[0];

            return getLine.data[1];
        } catch (error) {
            Report.Error(new AppError(StatusCode.BadRequest, error as string));
        }
    }

    async GetStops(line: string, direction: number): Promise<any> {
        try {
            const auth = await this.ApiAuth();
            const getLine = await this.GetLines(line, direction);

            const getStops = await axios.get(
                `${url}/Parada/BuscarParadasPorLinha?codigoLinha=${getLine.cl}`,
                {
                    headers: { Cookie: auth },
                },
            );

            return getStops.data;
        } catch (error) {
            Report.Error(new AppError(StatusCode.BadRequest, error as string));
        }
    }

    async GetForecast(stopId: number, lineId: number): Promise<any> {
        try {
            const auth = await this.ApiAuth();
            // const getLine = await this.GetLines(line, direcao);

            const getForecast = await axios.get(
                `${url}/Previsao?codigoParada=${stopId}&codigoLinha=${lineId}`,
                {
                    headers: { Cookie: auth },
                },
            );

            return getForecast.data;
        } catch (error) {
            Report.Error(new AppError(StatusCode.BadRequest, error as string));
        }
    }

    /*async GetLocation(line: string): Promise<any> {
        try {
            const auth = await this.ApiAuth();
            const getLine = await this.GetLines(line);

            const getLocal = await axios.get(
                `${url}/Parada/BuscarParadasPorLinha?codigoLinha=${getLine.data[0].cl}`,
                {
                    headers: { Cookie: auth },
                },
            );

            return getLocal;
        } catch (error) {
            Report.Error(new AppError(StatusCode.BadRequest, error as string));
        }
    } */
}

export { ApiSptProvider };
