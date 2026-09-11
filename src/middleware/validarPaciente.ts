import type { Request, Response, NextFunction } from "express";
import { ZodType, ZodError } from "zod";

export const validarPaciente = (schema: ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const resultado = schema.safeParse(req.body);
        if (!resultado.success) {
            res.status(400).json({error:"Invalido", detalles: resultado.error.flatten().fieldErrors});
            return;
        }
        req.body = resultado.data;
        next();
    }
}