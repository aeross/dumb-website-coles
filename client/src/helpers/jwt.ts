import jwt, { JwtPayload } from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key-here"

export default class JWTHelper {
    static encode(payload: JwtPayload) {
        return jwt.sign(payload, SECRET_KEY);
    }

    static decode(token: string) {
        return jwt.verify(token, SECRET_KEY);
    }
}
