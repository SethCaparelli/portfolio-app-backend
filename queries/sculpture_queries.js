const database = require("../database-connection")

module.exports = {
    list(){
        return database("sculpture")
    },
    read(id){
        return database("sculpture").select().where("id", id).first()
    },
    create(sculpture){
        return database("sculpture").insert(sculpture).returning("*")
            .then(record => record[0])
    },
    update(id, sculpture){
        return database("sculpture").update(sculpture).where("id", id).returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("sculpture").delete().where("id", id)
    }
}