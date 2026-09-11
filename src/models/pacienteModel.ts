import { prisma } from "../config/prisma";

export const pacienteModel = {
    obtenerPacientes: async () => {
        return await prisma.paciente.findMany({
            orderBy: {id: "asc"},
        });
    },
    obtenerIdPaciente: async (id:number) => {
        return await prisma.paciente.findUnique({
            where: {id:id},
            include:{
                cita: {
                    orderBy:{id:"asc"},
                    select:{estado:true, fecha:true, medico:true},
                },
            },
        });
    },
    crearPaciente: async (nombre: string, fechaNacimiento: Date, email:string, telefono: string,) => {
        return prisma.paciente.create({
            data:{nombre, fechaNacimiento,email,telefono,},
        })
    },
};