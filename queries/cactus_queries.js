const database = require("../database-connection")

module.exports = {
    list(){
        return database("cactus")
    },
    read(id){
        return database("cactus").select().where("id", id).first()
    },
    create(cactus){
        return database("cactus").insert(cactus).returning("*")
            .then(record => record[0])
    },
    update(id, cactus){
        return database("cactus").update(cactus).where("id", id).returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("cactus").delete().where("id", id)
    }
}