const { Router } = require("express")
const router = Router()
const controllers = require("../controllers/index")

router.get("/", (req, res) => res.send("This is root!"))

router.get('/mountains',controllers.getAllMountains)
router.get('/dogs', controllers.getAllDogs)
router.post('/addDog',controllers.createDog)
router.delete('/dogs/:id',controllers.deleteDog)
router.get('/dogs/:id',controllers.getDogById)
router.put('/listDog',controllers.addDogToMount)


module.exports = router;