/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// this function describes the changes we want to make
// MUST have a return
exports.up = function (knex) {
    return knex.schema.createTable('veggies', tbl => {
        // creates a primary key that auto-increments
        tbl.increments('id');

        // add a string (text) column up to 128 characters
        // should not allow duplicate values and be required (not null)
        tbl.string('name', 128).unique().notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// this function describes how to undo the changes
// MUST have a return
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('veggies');
};
