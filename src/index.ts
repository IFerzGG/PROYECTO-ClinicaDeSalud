import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import { prisma } from "./config/prisma";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/api/especialidad", async (req:Request, res:Response) => {
    const data = await prisma.especialidad.findMany();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Api corriendo en el http://localhost:${PORT}`);
});