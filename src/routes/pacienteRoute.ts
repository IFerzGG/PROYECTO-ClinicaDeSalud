import { Router } from "express";
import { getPaciente, getIdPaciente, postPaciente } from "../controllers/pacienteController";
import { schemaPaciente } from "../schemas/pacienteSchema";
import { validarPaciente } from "../middleware/validarPaciente";


const router = Router();

router.get("/paciente", getPaciente);
router.get("/paciente/:id", getIdPaciente);
router.post("/paciente", validarPaciente(schemaPaciente), postPaciente);

export default router; 