const express = require("express");
const { Client } = require('pg');
const app = express();
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '@iamabhishek',
    database: 'Abhishek2'
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dbConnWithExpress.html');
});


app.post('/', (req, res) => {
    const { username, email, age } = req.body;
    client.connect();

    client.query("insert into aaa values($1, $2, $3)", [username, email, age], (err, res) => {
        if (err) {
            console.log(err);
        }

    });
    res.send("Student registered successfully");

});


app.listen(8000, () => {
    console.log('Server started on port 8000');
});


