//import { AppContainer } from "@expressots/core";
import { Container } from "inversify";
import { UserModule } from "@services/users/user.module";
import { buildProviderModule } from "inversify-binding-decorators";

//const appContainer = new AppContainer();

const container = new Container();

container.load(
    buildProviderModule(),
    UserModule,
);

export default container;
