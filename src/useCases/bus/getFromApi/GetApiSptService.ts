import { AppError, Report, StatusCode } from "@expressots/core";
import { ApiSptProvider } from "@providers/apiSPT/ApiSptProvider";
import { provide } from "inversify-binding-decorators";

@provide(GetApiSptService)
class GetApiSptService {
    constructor(private apiProvider: ApiSptProvider) {}

    async execute(data: string): Promise<any> {
        const lineData = await this.apiProvider.GetLocation(data);

        if (!lineData) {
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    "algo deu errado!!",
                    "find-all-bus",
                ),
            );
        }

        return lineData;
    }
}

export { GetApiSptService };
