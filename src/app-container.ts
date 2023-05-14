import { AppContainer } from "@expressots/core";
import { UserModule } from "useCases/users/user.module";
import { BusModule } from "useCases/bus/bus.module";
//import { Container } from "inversify";
//import { buildProviderModule } from "inversify-binding-decorators";

const appContainer = new AppContainer();

//const container = new Container();

const container = appContainer.create([
    //buildProviderModule(),
    BusModule,
    UserModule,
]);

export default container;
