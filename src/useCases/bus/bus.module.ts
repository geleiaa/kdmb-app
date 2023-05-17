import { BusCreateController } from "@useCases/bus/create/BusCreateController";
import { FindAllBusController } from "@useCases/bus/find/FindAllBusController";
import { GetBusFromFrontend } from "@useCases/bus/get_bus_info/GetBusFromFrontendController";
import { CreateModule } from "@expressots/core";
import { ContainerModule } from "inversify";

const BusModule: ContainerModule = CreateModule([
    BusCreateController,
    FindAllBusController,
    GetBusFromFrontend,
]);

export { BusModule };
