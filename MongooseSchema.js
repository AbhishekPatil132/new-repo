const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: String,
    Branch: String,
    Rollno: Number
});

module.exports = mongoose.model('coll1', productSchema);