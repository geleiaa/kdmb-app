import { CreateModule } from "@expressots/core";
import { UserCreateController } from "@useCases/users/create/UserCreateController";
import { ContainerModule } from "inversify";
import { LoginUserController } from "@useCases/users/login/LoginUserController";

const UserModule: ContainerModule = CreateModule([
    UserCreateController,
    LoginUserController,
]);

export { UserModule };
