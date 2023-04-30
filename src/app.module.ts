import { CreateModule } from "@expressots/core";
import { UserCreateController } from "./controllers/UserCreateController";
//import { UsersServices } from ...

const UserModule = CreateModule([UserCreateController]);

export { UserModule };
