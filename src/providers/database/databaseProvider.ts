import 'dotenv/config';
import { provide } from 'inversify-binding-decorators';
import mongoose from "mongoose";

@provide(DataBaseProvider)
class DataBaseProvider {

    async Connect(): Promise<void> {
        await mongoose.connect(String(process.env.MONGODB_URL));
        console.log('DataBase Connected!!');
    }

    async Disconect(): Promise<void> {
        await mongoose.connection.close();
        console.log('DataBase Disconnected!!');
    }
}

const DbProviderInstance = new DataBaseProvider();

export { DbProviderInstance as DataBaseProvider };
