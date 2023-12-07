import jwt, { JwtPayload } from "jsonwebtoken";
import * as noWayJose from "jose";
const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key-here"

export default class JWTHelper {
    static encode(payload: JwtPayload) {
        return jwt.sign(payload, SECRET_KEY);
    }

    static decode(token: string) {
        return jwt.verify(token, SECRET_KEY);
    }

    static async joseDecode<T>(token: string) {
        const secretKey = new TextEncoder().encode(SECRET_KEY);
        return await noWayJose.jwtVerify<T>(token, secretKey);
    }
}
