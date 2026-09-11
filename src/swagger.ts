import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Mi API Clinida de Salud",
    description: "Documentación generada automáticamente",
    version: "1.0.0",
  },
  host: "localhost:3000",
  schemes: ["http"],
  components: {
    securitySchemes:{
      bearerAuth: {
        type: 'http',
          scheme: 'bearer'
      }
    }
  }
};

const outputFile = "./swagger-output.json";
const routes = ["./src/index.ts"];

swaggerAutogen({openapi:"3.0.0"})(outputFile, routes, doc);