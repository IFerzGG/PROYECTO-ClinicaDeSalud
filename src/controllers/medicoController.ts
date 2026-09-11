import type { Response, Request } from "express";
import { medicoModel } from "../models/medicoModel";

export const getMedico = async (req:Request, res:Response) =>{
    try {
        if(typeof req.query.especial !=="string"){
            const obtener = await medicoModel.obtenerMedico();
            res.json(obtener);
            return;
        }
        const {especial} = req.query;
        const obtener = await medicoModel.obtenerMedicosQuery(especial);
        res.json(obtener);
    } catch (error: any) {
        res.status(500).json({ message: error });
    }
}