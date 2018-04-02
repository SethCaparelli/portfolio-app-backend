const database = require("../database-connection")

module.exports = {
    list(){
        return database("design")
    },
    read(id){
        return database("design").select().where("id", id).first()
    },
    create(design){
        return database("design").insert(design).returning("*")
            .then(record => record[0])
    },
    update(id, design){
        return database("design").update(design).where("id", id).returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("design").delete().where("id", id)
    }
}