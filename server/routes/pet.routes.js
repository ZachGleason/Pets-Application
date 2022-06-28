const PetController = require("../controller/pet.controller");
module.exports = (app) => {
	// get all pets (for admin account use)
	app.get("/api/pets", PetController.getAll);

	// get a target pet
	app.get("/api/pets/:id", PetController.getById);

	// get all pets of a target user
	app.get("/api/pets/user/:id", PetController.getByUser);

	// add a new pet
	app.post("/api/pets", PetController.addNew);

	// edit a pet
	app.put("/api/pets/:id", PetController.updateOneById);

	// set media for a pet
	app.put("/api/pets/media/:id", PetController.setMedia);

	// delete a pet by id
	app.delete("/api/pets/:id", PetController.deleteOneById);
};
