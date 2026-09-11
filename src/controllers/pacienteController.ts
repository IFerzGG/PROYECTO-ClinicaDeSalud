import type { Response, Request } from "express";
import { pacienteModel } from "../models/pacienteModel";

export const getPaciente = async (req:Request, res:Response) =>{
    try {
        const obtener = await pacienteModel.obtenerPacientes();
        res.json(obtener);
    } catch (error: any) {
        res.status(500).json({ message: error });
    }
}
export const getIdPaciente = async (req:Request, res:Response) =>{
    try {
        const id = Number(req.params.id);
        if(isNaN(id)){
            res.status(400).json({error:"Debe ser un valor numerico"})
        }
        const obtener = await pacienteModel.obtenerIdPaciente(id);
        res.json(obtener);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const postPaciente = async (req:Request, res:Response) => {
    try {
        const {nombre, fechaNacimiento, email, telefono} = req.body;
        if(!nombre||!fechaNacimiento||!email||!telefono){
            res.status(400).json({ error: "faltan campos obligatorios" });
        }
        const obtener = await pacienteModel.crearPaciente(nombre,fechaNacimiento,email,telefono);
        res.json(obtener);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}