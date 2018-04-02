
exports.up = function(knex, Promise) {
    return knex.schema.createTable("vessel", (table) => {
        table.increments()
        table.text("name").notNullable()
        table.text("material")
        table.text("url")
        table.text("type")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("vessel")
};
