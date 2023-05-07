const express = require('express');
require('./MongooseConnToDB');
const Product = require('./MongooseSchema');

const app = express();
app.use(express.json());

// saving request data into database
app.post('/db', async (req, res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});


// Updating data of database using QueryParams
app.put('/db/:_id', async(req, res)=>{
    // console.log(req.params);
    let data = await Product.updateOne(
        req.params, // { condition }
        {
             $set: req.body
        }
    )
    res.send(data);

    if(data.modifiedCount > 0){
        console.log("updated...");
    }
})

app.listen(8000);