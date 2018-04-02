const express = require("express")
const router = express.Router()

const queries = require("../queries/advertising_queries")

router.get("/", (request, response, next) => {
    console.log(next)
    queries.list()
    .then(advertising => {
        response.json({advertising})
    })
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(advertising => {
        advertising
            ? response.json({advertising})
            : response.status(404).json({message: "Not Found"})
    })
    .catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(advertising => {
        response.status(201).json({advertising: advertising})
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
    .then(advertising => {
        response.json({advertising: advertising[0]})
    })
    .catch(next)
})

module.exports = router
