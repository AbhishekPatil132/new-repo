const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Ab');

const productSchema = new mongoose.Schema({
    name: String,
    branch: String,
    rollNo: Number
});

const saveInMongoDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({name: "Mahi", branch: "Csk", rollNo: 7});
    const result = await data.save();
    console.log(result);
};

saveInMongoDB();
