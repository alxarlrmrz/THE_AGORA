const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    category: { type: String, required: true},
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true},
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: String, required: true },
});

const products = mongoose.model('products', productsSchema);


module.exports = products;