import { CreateModule } from "@expressots/core";
import { UserCreateController } from "@controllers/UserCreateController";
import { ContainerModule } from "inversify";

const UserModule: ContainerModule = CreateModule([UserCreateController]);

export { UserModule };
