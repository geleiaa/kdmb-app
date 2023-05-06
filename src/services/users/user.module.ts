import { CreateModule } from "@expressots/core";
import { UserCreateController } from "@controllers/user/UserCreateController";
import { ContainerModule } from "inversify";
import { LoginUserController } from "@controllers/user/LoginUserController";

const UserModule: ContainerModule = CreateModule([
    UserCreateController,
    LoginUserController,
]);

export { UserModule };
