const PetController = require("../controller/pet.controller")
module.exports = (app) => {
  // get all pets (for admin account use)
  app.get("/api/pets", PetController.getAll)

  // get a target pet
  app.get("/api/pets/:id", PetController.getById)

  // get all pets of a target user
  app.get("/api/pets/user/:id", PetController.getByUser)

  // add a new pet
  app.post("/api/pets", PetController.addNew)
}