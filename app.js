const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()
const cors = require("cors")

const cactus = require("./routes/cactus")
const tree = require("./routes/tree")
const sculpture = require("./routes/sculpture")
const painting = require("./routes/painting")
const vessel = require("./routes/vessel")
const advertising = require("./routes/advertising")
const design = require("./routes/graphic-design")

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

app.use("/cactus", cactus)
app.use("/tree", tree)
app.use("/sculpture", sculpture)
app.use("/painting", painting)
app.use("/vessel", vessel)
app.use("/advertising", advertising)
app.use("/design", design)

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
