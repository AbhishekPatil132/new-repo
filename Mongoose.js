const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Ab');

const productSchema = new mongoose.Schema({
    Name: String,
    Branch: String,
    Rollno: Number
});

const saveInMongoDB = async () => {
    const Product = mongoose.model('coll1', productSchema);
    let data = new Product({Name: "Mahi", Branch: "Csk", Rollno: 7});
    const result = await data.save();
    console.log(result);
};

saveInMongoDB();
