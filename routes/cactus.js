const express = require("express")
const router = express.Router()

const queries = require("../queries")

router.get("/", (request, response, next) => {
    queries.list()
    .then(cactus => {
        response.json({cactus})
    })
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(cactus => {
        cactus
            ? response.json({cactus})
            : response.status(404).json({message: "Not Found"})
    })
    .catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(cactus => {
        response.status(201).json({cactus: cactus})
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
    .then(cactus => {
        response.json({cactus: cactus[0]})
    })
    .catch(next)
})

module.exports = router
