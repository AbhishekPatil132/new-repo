const express = require('express');
const dbConnect = require('./Mongo_Connection');
const app = express();

app.use(express.json());

app.get('/', async (req, res)=>{

    let result = await dbConnect();
    let data = await result.find().toArray();
    res.send(data);
})

app.post('/', async (req, res)=>{
    //console.log(req.body);
    //res.send(req.body);
    let result = await dbConnect();
    let data = await result.insertOne(req.body);
    res.send(data);
    if (data.acknowledged){
        console.log("Data inserted ...");
    }
})

app.listen(2000)