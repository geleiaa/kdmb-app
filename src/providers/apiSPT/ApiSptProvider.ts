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
            return resp.headers["set-cookie"]; //auth cookie da api
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

    async GetLines(line: string): Promise<any> {
        try {
            const auth = await this.ApiAuth();
            const getLine = await axios.get(
                `${url}/Linha/Buscar?termosBusca=${line}`,
                {
                    headers: { Cookie: auth },
                },
            );

            return getLine;
        } catch (error) {
            Report.Error(new AppError(StatusCode.BadRequest, error as string));
        }
    }

    async GetStops(line: string): Promise<any> {
        try {
            const auth = await this.ApiAuth();
            const getLine = await this.GetLines(line);

            const getStops = await axios.get(
                `${url}/Parada/BuscarParadasPorLinha?codigoLinha=${getLine.data[1].cl}`,
                {
                    headers: { Cookie: auth },
                },
            );

            return getStops;
        } catch (error) {
            Report.Error(new AppError(StatusCode.BadRequest, error as string));
        }
    }

    async GetLocation(line: string): Promise<any> {
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
    }
}

// const apiSptProvider = new ApiSptProvider();

export { ApiSptProvider };
