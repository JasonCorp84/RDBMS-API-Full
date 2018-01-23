exports.up = function(knex, Promise) {
    return knex.schema.createTable('post_tags', function (tbl) {
        tbl.integer('postUserID').references('id').inTable('users').primary();
        tbl.string('postTag').references('id').inTable('tags');
    })
};

exports.down = function(knex, Promise) {
  //  return knex.schema.dropTableIfExists('post_tags')

};
