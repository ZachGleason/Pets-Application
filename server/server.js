// imports and configs
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin: ['http://localhost:3000','https://localhost:3000']}))

// apply type routes
require("./routes/type.routes")(app);
// apply pet routes
require("./routes/pet.routes")(app);
// apply medication routes
require("./routes/medication.routes")(app);
// apply food routes
require("./routes/food.routes")(app);
// apply task routes
require("./routes/task.routes")(app);

require("./routes/user.routes")(app);

app.listen(8000, () => {
	console.log("Listening at Port 8000!");
});
