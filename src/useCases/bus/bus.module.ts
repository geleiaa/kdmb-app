import { BusCreateController } from "@useCases/bus/create/BusCreateController";
import { FindAllBusController } from "@useCases/bus/find/FindAllBusController";
import { GetBusDataController } from "@useCases/bus/get_bus_data/GetBusDataController";
import { CreateModule } from "@expressots/core";
import { ContainerModule } from "inversify";
import { GetBusForecastController } from "./get_bus_forecast/GetBusForecastController";

const BusModule: ContainerModule = CreateModule([
    BusCreateController,
    FindAllBusController,
    GetBusDataController,
    GetBusForecastController,
]);

export { BusModule };
