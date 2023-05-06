import "dotenv/config";
import { StatusCode } from "@expressots/core";
import { JwtTokenProvider } from "@providers/jwt/JwtTokenProvider";
import { NextFunction, Request, Response } from "express";

export function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    const jwtToken = req.headers.authorization;

    if (!jwtToken) {
        res.status(StatusCode.Unauthorized).json({
            message: "Você NÃO esta autenticado (noTk)!!",
        });
    }

    try {
        const verifyToken = JwtTokenProvider.decodeToken(String(jwtToken));

        req.headers["decoded"] = verifyToken as string;

        next();
    } catch (err) {
        if (err instanceof Error) {
            res.status?.(401).send({ code: 401, error: err.message });
        }

        res.status(StatusCode.Unauthorized).json({
            auth: false,
            message: "Sessão expirada!!",
        });
    }
}
