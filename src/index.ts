import express from "express";
import dotenv from "dotenv";
import routerMedico from "./routes/medicoRoute";
import routerPaciente from "./routes/pacienteRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routerPaciente);
app.use("/api", routerMedico);

app.listen(PORT, () => {
    console.log(`Api corriendo en el http://localhost:${PORT}`);
});