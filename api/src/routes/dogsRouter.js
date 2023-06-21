//* dogsRouter.js
//? AQUI VAN LAS RUTAS (ENDPOINTS) QUE INICIEN CON /dogs
//? CADA RUTA LLAMA A UN HANDLER ESPECIFICO
//? LOS HANDLERS SE ENCUENTRAN EN /src/handlers

const { Router } = require ("express");
const { getDogsHandler, getDogByIdHandler, createDogHandler } = require("../handlers/dogsHandlers");
const dogsRouter = Router();

// ESTA RUTA TRAE UN ARRAY CON OBJETOS, CADA OBJETO ES UNA RAZA DE PERRO
// SI RECIBE UNA QUERY TRAE A TODOS LOS PERROS QUE COINCIDAN CON EL NOMBRE DE LA QUERY
dogsRouter.get("/", getDogsHandler)

// ESTA RUTA OBTIENE EL DETALLE DE UNA RAZA ESPECIFICA, RECIBE ID POR PARAMS
dogsRouter.get("/:idRaza", getDogByIdHandler)

// ESTA RUTA RECIBE DATOS POR BODY Y CREA UN NUEVO PERRO
// RELACIONA LOS DATOS DEL PERRO CON LOS TEMPERAMENTOS ASOCIADOS
dogsRouter.post("/", createDogHandler)

module.exports = dogsRouter;