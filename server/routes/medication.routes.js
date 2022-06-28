const medicationController = require("../controller/medication.controller")

module.exports = (app) => {

  // get all medications for all pets
  app.get("/api/medications", medicationController.getAll)

  // get a target medication
  app.get("/api/medications/:id", medicationController.getById)

  // get all medications of a pet
  app.get("/api/medications/pet/:id", medicationController.getByPet)

  // create a new medication
  app.post("/api/medications", medicationController.addNew)

  // update a medication
  app.put("/api/medications/:id", medicationController.updateById)

  // delete a medication by id
  app.delete("/api/medications/:id", medicationController.deleteById)
}