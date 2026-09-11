import { EspecialidadScalarFieldEnum } from "../../generated/prisma/internal/prismaNamespace";
import { prisma } from "../config/prisma";

export const medicoModel = {
    obtenerMedicosQuery: async (especial:string) => {
        return await prisma.medico.findMany({
            where: {especialidad:{nombre:{equals:especial, mode:"insensitive"}}},
            include:{especialidad:{select:{nombre:true}}}
        });
    },
    obtenerMedico: async () => {
        return await prisma.medico.findMany({
            orderBy:{id:"asc"},
        })
    }
};
