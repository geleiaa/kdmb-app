import { AppError, Report, StatusCode } from "@expressots/core";
import { BusaoRepository } from "@repositories/bus/BusaoRepository";
import { ICreateBusDTO, ICreateBusReturnDTO } from "./ICreateBusDTO";
import { provide } from "inversify-binding-decorators";

@provide(CreateBusService)
class CreateBusService {
    constructor(private busRepo: BusaoRepository) { }

    async execute({
        name,
        linha,
        direcao,
        userId,
    }: ICreateBusDTO): Promise<ICreateBusReturnDTO | undefined> {
        try {
            const busExists = await this.busRepo.findByName(name);

            if (busExists) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest,
                        "Busão ja cadastrado!!",
                        "create bus service",
                    ),
                );
            }

            const busao = await this.busRepo.create({
                name,
                linha,
                direcao,
                userId,
            });

            let resp: ICreateBusReturnDTO;

            resp = {
                name: busao?.name as string,
                status: "success",
            };

            return resp;
        } catch (error) {
            Report.Error(
                new AppError(
                    StatusCode.BadRequest,
                    "Algo de errado!",
                    "create-bus-service",
                ),
            );
        }
    }
}

export { CreateBusService };
