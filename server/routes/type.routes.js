const TypeController = require("../controller/type.controller");

module.exports = (app) => {
	app.get("/api/type", TypeController.getAllType);
	app.post("/api/type", TypeController.addNewType);
	app.put("/api/type/:id", TypeController.editTypeById);
	app.delete("/api/type/:id", TypeController.deleteTypeById);
};
