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

// if want to update other than name 
//app.put('/', async (req, res)=>{
//    let result = await dbConnect();
//    let data = await result.updateOne(
//        { Name: "Jayesh"},
//        { $set: { Name: "JAYESH"}}
//    )


// if want to update name also
// then send original name through parameter then updates will take place
app.put('/:name', async (req, res)=>{
        let result = await dbConnect();
        let data = await result.updateOne(
            { Name: req.params.name},
            { $set: req.body}
        )

    if(data.modifiedCount > 0){
        console.log("Updated....");
    }
    res.send(data);
})

app.listen(2000)