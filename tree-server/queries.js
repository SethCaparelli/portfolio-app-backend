const database = require("./database-connection")

module.exports = {
    list(){
        return database("tree")
    },
    read(id){
        return database("tree").select().where("id", id).first()
    },
    create(tree){
        return database("tree").insert(tree).returning("*")
            .then(record => record[0])
    },
    update(id, tree){
        return database("tree").update(tree).where("id", id).returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("tree").delete().where("id", id)
    }
}