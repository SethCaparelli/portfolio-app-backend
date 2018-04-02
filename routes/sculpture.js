const express = require("express")
const router = express.Router()

const queries = require("../queries/sculpture_queries")

router.get("/", (request, response, next) => {
    queries.list()
    .then(sculpture => {
        response.json({sculpture})
    })
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(sculpture => {
        sculpture
            ? response.json({sculpture})
            : response.status(404).json({message: "Not Found"})
    })
    .catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(sculpture => {
        response.status(201).json({sculpture: sculpture})
    })
    .catch(next)
})

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id)
    .then(() => {
        response.status(204).json({deleted: true})
    })
    .catch(next)
})

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body)
    .then(sculpture => {
        response.json({sculpture: sculpture[0]})
    })
    .catch(next)
})

module.exports = router
