const app = require("./app")
const port = parseInt(process.env.PORT || 8888)

app.listen(port)
    .on("error", console.error.bind(console))
    .on("Listning", console.log.bind(console, `Listening on ${port}`))
