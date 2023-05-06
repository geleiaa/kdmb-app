import "dotenv/config";
import { provide } from "inversify-binding-decorators";
import jwt from "jsonwebtoken";

@provide(JwtTokenProvider)
export class JwtTokenProvider {
    public generateToken(sub: string) {
        return jwt.sign({ sub }, String(process.env.JWT_SECRET), {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
    }

    public static decodeToken(token: string) {
        return jwt.verify(token, String(process.env.JWT_SECRET));
    }
}
