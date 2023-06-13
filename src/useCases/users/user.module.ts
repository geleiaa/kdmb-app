import { CreateModule } from "@expressots/core";
import { UserCreateController } from "@useCases/users/create/UserCreateController";
import { ContainerModule } from "inversify";
import { LoginUserController } from "@useCases/users/login/LoginUserController";
import { UserProfileController } from "@useCases/users/profile/UserProfileController";

const UserModule: ContainerModule = CreateModule([
    UserCreateController,
    LoginUserController,
    UserProfileController
]);

export { UserModule };
