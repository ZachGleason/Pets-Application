const foodController = require("../controller/food.controller");

module.exports = (app) => {
	// get all food of all pets
	app.get("/api/food", foodController.getAll);

	// get a target food
	app.get("/api/food/:id", foodController.getById);

	// get all food of a target pet
	app.get("/api/food/pet/:id", foodController.getByPet);

	// create a new food
	app.post("/api/food", foodController.addNew);

	// update a food
	app.put("/api/food/:id", foodController.updateById);

	// delete a food
	app.delete("/api/food/:id", foodController.deleteById);
};
