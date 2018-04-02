const express = require("express")
const router = express.Router()

const queries = require("../queries/painting_queries")

router.get("/", (request, response, next) => {
    console.log(next)
    queries.list()
    .then(painting => {
        response.json({painting})
    })
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(painting => {
        painting
            ? response.json({painting})
            : response.status(404).json({message: "Not Found"})
    })
    .catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(painting => {
        response.status(201).json({painting: painting})
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
    .then(painting => {
        response.json({painting: painting[0]})
    })
    .catch(next)
})

module.exports = router
