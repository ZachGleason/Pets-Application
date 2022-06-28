// imports and configs
const express = require('express');
const cors = require('cors')    
const app = express();
app.use(cors())          
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// apply type routes
require("./routes/type.routes")(app)
// apply pet routes
require("./routes/pet.routes")(app)
// apply medication routes
require("./routes/medication.routes")(app)

app.listen(8000, () => {
  console.log("Listening at Port 8000!")
})