import { BusCreateController } from "@controllers/bus/BusCreateController";
import { CreateModule } from "@expressots/core";
import { ContainerModule } from "inversify";

const BusModule: ContainerModule = CreateModule([BusCreateController]);

export { BusModule };
