import express from "express";
import dotenv from "dotenv";
import routerMedico from "./routes/medicoRoute";
import routerPaciente from "./routes/pacienteRoute";
import swaggerUi from "swagger-ui-express";
import path from "node:path";
import fs from "node:fs";
import authRouter from "./routes/auth.routes";
import { verifyToken } from "./middleware/auth.middleware";
import { authorize } from "./middleware/authorize.middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//const swaggerDocument = require("./swagger-output.json");
//app.use("/api/docs", swaggerUi.serve, swaggerUi.setup());

const swaggerFilePath = path.resolve("./src/swagger-output.json");
if(fs.existsSync(swaggerFilePath)){
    const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath,"utf-8"));
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}else{console.log("Archivo swagger no encontrado");}

app.use("/api/auth", authRouter);
app.use("/api", verifyToken, authorize("RECEPCIONISTA"), routerPaciente
/* #swagger.security = [{
            "bearerAuth": []
    }] */
);
app.use("/api", verifyToken, authorize("RECEPCIONISTA"), routerMedico
/* #swagger.security = [{
            "bearerAuth": []
    }] */
);

app.listen(PORT, () => {
    console.log(`Api corriendo en el http://localhost:${PORT}`);
});