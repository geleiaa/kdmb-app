import { DataBaseProvider } from "@providers/database/databaseProvider";

class ServerProvider {
    constructor() {}

    async PostServerInit(): Promise<void> {
        await DataBaseProvider.Connect();

    }

    async ServerShutdown(): Promise<void> {
        await DataBaseProvider.Disconect
        process.exit(0);
    }
}


const serverProvider = new ServerProvider();

export { serverProvider as ServerProvider };
