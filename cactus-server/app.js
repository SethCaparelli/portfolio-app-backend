const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()

const cactus = require("./routes/cactus")

app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/cactus", cactus)

app.use((request, response, next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})

app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({
        message: error.message,
        error: request.app.get("env") === "development" ? error.stack: {}
    })
})

module.exports = app
