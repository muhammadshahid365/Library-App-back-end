/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('students', table => {
      table.increments('id');
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable()
    })
    .createTable('books', table => {
      table.increments('id');
      table.string('book_name', 255).notNullable();
      table.string('author', 255).notNullable();
      table.integer('borrowed_by').defaultTo(null);
      table.foreign('borrowed_by').references('id').inTable('students');
      table.timestamp('date_of_borrow').defaultTo(knex.fn.now());
      table.timestamp('expected_date_of_return');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('books')
    .dropTable('students');
};
