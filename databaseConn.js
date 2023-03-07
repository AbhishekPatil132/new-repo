const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '@iamabhishek',
  database: 'Abhishek2'
});

client.connect();

client.query("insert into aaa values('OP','opopop@gmail.com',50)", (err, res) => {
  if(!err)
  {
    console.log("Data inserted successfully")
  }

});

