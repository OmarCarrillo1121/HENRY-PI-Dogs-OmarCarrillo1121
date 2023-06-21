//* routes/index.js
//? ES EL ROUTER PRINCIPAL
//? DESPUES DE PASAR POR app.js LLEGA AQUI
//* ES CONVENIENTE MODULARIZAR?? (4 RUTAS) /dogs (1 RUTA) /temperaments

const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require('./dogsRouter')
const temperRouter = require('./temperRouter')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsRouter)
router.use("/temper", temperRouter)

module.exports = router;
