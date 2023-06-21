//* temperamentsRouter.js
//? AQUI VAN LAS RUTAS (ENDPOINTS) QUE INICIEN CON /temperaments
//? CADA RUTA LLAMA A UN HANDLER ESPECIFICO
//? LOS HANDLERS SE ENCUENTRAN EN /src/handlers

const { Router } = require ("express");
const { getTemperHandler } = require("../handlers/dogsHandlers");
const temperRouter = Router();

// ESTA RUTA TRAE UN ARRAY CON OBJETOS, CADA OBJETO ES UNA RAZA DE PERRO
// SI RECIBE UNA QUERY TRAE A TODOS LOS PERROS QUE COINCIDAN CON EL NOMBRE DE LA QUERY
temperRouter.get("/", getTemperHandler)

module.exports = temperRouter;