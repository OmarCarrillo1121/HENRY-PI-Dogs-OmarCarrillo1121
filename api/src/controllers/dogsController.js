const { Dog } = require ("../db")

const createDog = async (name, heightMin, heightMax, weightMin, weightMax, lifespan, temper) => 
    await Dog.create ( { name, heightMin, heightMax, weightMin, weightMax, lifespan, temper })

module.exports = { createDog }