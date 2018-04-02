const express = require("express")
const router = express.Router()

const queries = require("../queries/graphic-design_queries")

router.get("/", (request, response, next) => {
    console.log(next)
    queries.list()
    .then(design => {
        response.json({design})
    })
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(design => {
        design
            ? response.json({design})
            : response.status(404).json({message: "Not Found"})
    })
    .catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(design => {
        response.status(201).json({design: design})
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
    .then(design => {
        response.json({design: design[0]})
    })
    .catch(next)
})

module.exports = router
