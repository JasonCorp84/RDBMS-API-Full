
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tags', function (tbl) {
        tbl.increments('id').primary();
        tbl
            .string('tag', 16)
            .unique('tag', 'uq_tag_name')
       tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
   // return knex.schema.dropTableIfExists('tags')

};
