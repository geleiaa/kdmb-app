import { CreateModule } from "@expressots/core";
import { UserCreateController } from "./create/UserCreateController";
import { ContainerModule } from "inversify";

const UserModule: ContainerModule = CreateModule([UserCreateController]);

export { UserModule };
