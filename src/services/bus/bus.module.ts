import { BusCreateController } from "@controllers/bus/BusCreateController";
import { FindAllBusController } from "@controllers/bus/FindAllBusController";
import { CreateModule } from "@expressots/core";
import { ContainerModule } from "inversify";

const BusModule: ContainerModule = CreateModule([
    BusCreateController,
    FindAllBusController
]);

export { BusModule };
