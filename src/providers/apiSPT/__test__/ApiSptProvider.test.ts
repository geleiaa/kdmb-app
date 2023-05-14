import nock from "nock";
import apiLineResp from "../../../../dev_data/api-linha-resp.json";
import { ApiSptProvider } from "../ApiSptProvider";

const apiSptProvide = new ApiSptProvider();

describe("Api SPT Provider Tests", () => {
    it("deve return lines de bus", async () => {
        nock("http://api.olhovivo.sptrans.com.br/v2.1", {
            reqheaders: {
                Cookie: (): boolean => true,
            },
        })
            .get(`/Linha/Buscar?termosBusca=6475-10`)
            .reply(200, apiLineResp);

        const lines = await apiSptProvide.GetLines("6475-10");

        expect(lines.data).toEqual(apiLineResp);
    });
});
