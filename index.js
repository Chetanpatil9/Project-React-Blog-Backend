const express = require("express")
const home = require('./routes/Home')
const bollywood = require('./routes/Bollywood')
const hollywood = require('./routes/Hollywood')
const technology = require('./routes/Technology')
const fitness = require('./routes/Fitness')
const science = require('./routes/Science')
const port = 8000
const app = express()

const cors = require('cors')

app.use(cors())

app.use('./', home)
app.use('./', bollywood)
app.use('./', hollywood)
app.use('./', technology)
app.use('./', fitness)
app.use('./', science)

app.listen(port, ()=>{
    console.log("Server is started");
})