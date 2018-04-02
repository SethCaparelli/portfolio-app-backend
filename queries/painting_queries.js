const database = require("../database-connection")

module.exports = {
    list(){
        return database("painting")
    },
    read(id){
        return database("painting").select().where("id", id).first()
    },
    create(painting){
        return database("painting").insert(painting).returning("*")
            .then(record => record[0])
    },
    update(id, painting){
        return database("painting").update(painting).where("id", id).returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("painting").delete().where("id", id)
    }
}