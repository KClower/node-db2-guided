// const knex = require('knex')

// const db = knex({
//   client: 'sqlite3', // database driver
//   connection: {
//     filename: './data/produce.db3' // from the root folder
//   },
//   useNullAsDefault: true // used for SQLite only
// });

const db = require('../../data/db_config.js');

function getAll() {
  return db('fruits');
}

function getById(id) {
  return db('fruits').where('id', id).first();
}

async function create(fruit) {
  const [id] = await db('fruits').insert(fruit);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
};
