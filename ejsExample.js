const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.send('<h1> Welcome to Home page</h1>');
});

app.get('/about', function(req, res){
    res.send('<h1> this is about page </h1>');
});




app.set('view engine', 'ejs');

app.get('/ejs', (req, res)=>{

    const user={
        name: 'Abhishek',
        email:'abc@gmail.com',
        city:'Pune',
        menu:['Vadapav', 'Samosa', 'Chai', 'Paratha']
    }
    res.render('ejsExample1', {user});
});

app.get('/log', (req, res)=>{
    res.render('login');
});

app.post('/log', (req, res)=>{
    const name = req.body.name;
    res.render('POSTlogin', {name});
});

app.listen(2000);