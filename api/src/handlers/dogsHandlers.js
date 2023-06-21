// ESTA HANDLER TRAE LA INFO DE TODOS LOS PERROS
// SI RECIBE UNA QUERY, TRAE LOS RESULTADOS DE LOS PERROS QUE COINCIDAN CON LA QUERY
const { createDog } = require("../controllers/dogsController")

const getDogsHandler = (req, res) => {
    const { name } = req.query
    if (name) {
        res.send (`Quiero buscar todos los que se llamen ${name}`)
    } else {
        res.send ("Quiero enviar todos los usuarios")
    }
}

// ESTE HANDLER TRAE LOS PERROS QUE COINCIDAN CON EL ID RECIBIDO POR PARAMS
const getDogByIdHandler = (req,res) => {
    const { idRaza } = req.params
    res.send (`Va a enviar el detalle del perro con la raza ${idRaza}`)
}

//ESTE HANDLER CREA UN PERRO NUEVO, RECIBE LA INFO POR BODY
const createDogHandler = async (req, res) => {
    try {
        const { name, heightMin, heightMax, weightMin, weightMax, lifespan, temper } = req.body
        const newDog = await createDog ( name, heightMin, heightMax, weightMin, weightMax, lifespan, temper )
        res.status (201).json(newDog)
    } catch (error) {
        res.status (400).json ({error: error.message})
    }
}

const getTemperHandler = (req, res) => {
    res.send ("NIY: ESTA RUTA OBTIENE TODOS LOS TEMPERAMENTOS")
}

module.exports = {
    getDogsHandler,
    getDogByIdHandler,
    createDogHandler,
    getTemperHandler,
}

