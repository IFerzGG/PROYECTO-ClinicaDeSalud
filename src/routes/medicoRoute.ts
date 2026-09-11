import { Router } from "express";
import { getMedico } from "../controllers/medicoController";

const router = Router();

router.get("/medico", getMedico);

export default router;