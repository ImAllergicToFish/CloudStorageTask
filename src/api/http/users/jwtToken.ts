import jwt from "jsonwebtoken";
import { getConfig } from '../../../config';

const secretKey = getConfig().AUTH_JWT_SECRET || "secret";

export class Token {

    static create(id: Object): string {
        const payload = { id };
    
        const exp = getConfig().AUTH_JWT_EXPIRES_IN || "24h";
    
        return jwt.sign(payload, secretKey, { expiresIn: exp })
    }

    static decoded(jwtToken: string): string {
        return jwt.verify(jwtToken, secretKey) as string;
    }
}