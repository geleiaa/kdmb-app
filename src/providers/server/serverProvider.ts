//import { Environments } from "@expressots/core";
import { DataBaseProvider } from "@providers/database/databaseProvider";
import { provide } from "inversify-binding-decorators";

@provide(ServerProvider)
class ServerProvider {
    // async ConfigureServices(): Promise<void> {
    //     Environments.checkAll();
    // }

    async PostServerInit(): Promise<void> {
        await DataBaseProvider.Connect();
    }

    async ServerShutdown(): Promise<void> {
        DataBaseProvider.Disconect;
        process.exit(0);
    }
}

const serverProvider = new ServerProvider();

export { serverProvider as ServerProvider };
