const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '@iamabhishek',
  database: 'Abhishek2'
});

module.exports = client;