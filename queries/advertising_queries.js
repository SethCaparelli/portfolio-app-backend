const database = require("../database-connection")

module.exports = {
    list(){
        return database("advertising")
    },
    read(id){
        return database("advertising").select().where("id", id).first()
    },
    create(advertising){
        return database("advertising").insert(advertising).returning("*")
            .then(record => record[0])
    },
    update(id, advertising){
        return database("advertising").update(advertising).where("id", id).returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("advertising").delete().where("id", id)
    }
}