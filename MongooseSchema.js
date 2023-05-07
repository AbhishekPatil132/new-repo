const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: String,
    Brand: String,
    Price: Number
});

module.exports = mongoose.model('products', productSchema);