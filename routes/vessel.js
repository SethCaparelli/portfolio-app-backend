const express = require("express")
const router = express.Router()

const queries = require("../queries/vessel_queries")

router.get("/", (request, response, next) => {
    queries.list()
    .then(vessel => {
        response.json({vessel})
    })
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(vessel => {
        vessel
            ? response.json({vessel})
            : response.status(404).json({message: "Not Found"})
    })
    .catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(vessel => {
        response.status(201).json({vessel: vessel})
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
    .then(vessel => {
        response.json({vessel: vessel[0]})
    })
    .catch(next)
})

module.exports = router
