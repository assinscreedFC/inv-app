// models/databaseClient.js
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

client.connect()
  .then(() => console.log(client.database))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
