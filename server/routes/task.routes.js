// USE MILITARY TIME AS FORM INPUTS FOR FULLY FUNCTIONING

const taskController = require("../controller/task.controller");

module.exports = (app) => {
	// get all tasks
	app.get("/api/tasks", taskController.getAll);

	// get a target task
	app.get("/api/tasks/:id", taskController.getById);

	// get all tasks of a pet
	app.get("/api/tasks/pet/:id", taskController.getByPet);

	// add a new task
	app.post("/api/tasks", taskController.addNew);

	// update a task
	app.put("/api/tasks/:id", taskController.updateById);

	// delete a task
	app.delete("/api/tasks/:id", taskController.deleteById);
};
