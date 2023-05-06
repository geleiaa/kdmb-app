import "dotenv/config";
import bcrypt from "bcrypt";
import { provide } from "inversify-binding-decorators";

@provide(HashProvider)
export class HashProvider {
    public async hashPass(password: string): Promise<string> {
        return await bcrypt.hash(password, Number(process.env.HASH_SALT));
    }

    public async compareHash(
        password: string,
        hashedPass: string,
    ): Promise<boolean> {
        return await bcrypt.compare(password, hashedPass);
    }
}
