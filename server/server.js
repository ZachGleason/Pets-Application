const express = require('express')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors({origin: ['http://localhost:3000','https://localhost:3000']}))

require('./routes/pet.routes')(app)
app.listen(8000, ()=>{console.log("http Pet server started... port 8000") })
