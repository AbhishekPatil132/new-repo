const express = require('express');
require('./MongooseConnToDB');
const Product = require('./MongooseSchema');

const app = express();
app.use(express.json());

app.get('/search/:key', async (req, res)=>{
    console.log(req.params.key);
    let data = await Product.find(
        {
            $or:[
                { "Name": { $regex:req.params.key }},  // searches the key in Name field
                { "Branch": { $regex:req.params.key }},
                { "Rollno": { $regex:req.params.key }}
            ]
        }
    );
    
    res.send(data);
})

app.listen(5000);