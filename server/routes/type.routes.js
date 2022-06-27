const TypeController = require("../controller/type.controller")

module.exports = (app) => {
  app.get("/api/type", TypeController.getAllType)
}