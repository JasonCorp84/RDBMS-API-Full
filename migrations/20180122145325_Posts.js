
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function (tbl) {
        tbl.increments('id').primary();
        tbl.integer('userID')
            .references('id')
            .inTable('users');
        tbl.text('text').notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts')
  };
  