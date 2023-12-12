const bodyParser = require("body-parser")
const express = require("express")
const app = express()
require("dotenv").config()
require('./config/dbcon')
app.use(bodyParser.json())
//routes
app.use("/login",require('./router/login'))

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})