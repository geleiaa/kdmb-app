import { AppContainer } from "@expressots/core";
import { UserModule } from "@useCases/users/user.module";
import { BusModule } from "@useCases/bus/bus.module";

const appContainer = new AppContainer();

const container = appContainer.create([BusModule, UserModule]);

export default container;
