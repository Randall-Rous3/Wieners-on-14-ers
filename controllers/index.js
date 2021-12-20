const Mountains = require ('../models/Mountains')
const Dogs = require('../models/Dogs')








const updateDog = async (req, res) => {
    try {
        const { id } = req.params;
        await Dogs.findByIdAndUpdate(id, req.body, { new: true }, (err, dog) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!dog) {
                res.status(500).send('dog not found!');
            }
            return res.status(200).json(dog);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteDog = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Dogs.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Dog deleted");
        }
        throw new Error("Dog not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createDog = async (req, res) => {
    try {
        const dogs = await new Dogs(req.body)
        await dogs.save()
        return res.status(201).json({ dogs });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getAllDogs = async (req, res) => {
    try {
        const dogs = await Dogs.find()
        return res.status(200).json({ dogs })
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }
  const getDogById = async (req, res) => {
    try {
        const { id } = req.params;
        const dog = await Dogs.findById(id)
        if (dog) {
            return res.status(200).json({ dog });
        }
        return res.status(404).send('Plant with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAllMountains = async (req, res) => {
  try {
      const mountains = await Mountains.find()
      return res.status(200).json({ mountains })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}
const createMountain = async (req, res) => {
    try {
        const mountains = await new Mountains(req.body)
        await mountains.save()
        return res.status(201).json({ mountains });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const addDogToMount = async (req, res ) => {
 
        try {
            const mountains = await Mountains.updateOne()
            return res.status(200).json({ mountains})
        } catch (error) {
            return res.status(500).send(error.message);
        }
      
}


module.exports = {
    createMountain,
    updateDog,
    getDogById,
    deleteDog,
    createDog,
    getAllMountains,
    getAllDogs,
    addDogToMount
}