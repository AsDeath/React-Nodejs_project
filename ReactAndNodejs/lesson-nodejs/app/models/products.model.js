const mongoose = require("mongoose");

const Products = mongoose.model(
    "Products",
    new mongoose.Schema({
        type: String,
        name: String,
        image: String,
        link: String,
        largeImage: String,
        price: Number,
        description: String,
        weight: Number
    })
)

module.exports = Products;