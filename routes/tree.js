const express = require("express")
const router = express.Router()

const queries = require("../queries/tree_queries")

router.get("/", (request, response, next) => {
    queries.list()
    .then(tree => {
        response.json({tree})
    })
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(tree => {
        tree
            ? response.json({tree})
            : response.status(404).json({message: "Not Found"})
    })
    .catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(tree => {
        response.status(201).json({tree: tree})
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
    .then(tree => {
        response.json({tree: tree[0]})
    })
    .catch(next)
})

module.exports = router
