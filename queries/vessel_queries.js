const database = require("../database-connection")

module.exports = {
    list(){
        return database("vessel")
    },
    read(id){
        return database("vessel").select().where("id", id).first()
    },
    create(vessel){
        return database("vessel").insert(vessel).returning("*")
            .then(record => record[0])
    },
    update(id, vessel){
        return database("vessel").update(vessel).where("id", id).returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("vessel").delete().where("id", id)
    }
}