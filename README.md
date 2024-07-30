# DB II Guided Project

Guided project **DB II** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a REST client alike [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- create a free account for [DB Designer](https://dbdesigner.net).

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.

## Connect knex to ./data/produce.db3 database file
- npm i -g knex -> makes knex global
- knex init -> creates the knexfile.js
- modify the development configuration to point to ./data/produce.db3
- remove the knex code at the top of fruits-model.js
- create a "connection" (db_config.js) file that uses knexfile.js to pick the development configuration object
- require (import) the db_config.js file inside the fruits-model.js (call it db) as means to access the database
- run the sever and do a GET to localhost:9000/api/fruits

## Mantras
- every table MUST have a Primary Key
- EVERY change to the database schema (structure) NEEDS a new migration

## Migrations
- create a migration: knex migrate:make add_migrationName_table
- run all pending migrations: knex migrate:latest
