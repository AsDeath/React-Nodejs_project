const mongoose = require("mongoose");

const AllProducts = mongoose.model(
    "AllProducts",
    new mongoose.Schema({
        title: String,
        link: String,
        products:[
            {
                type: mongoose.Schema.Types.Object,
                ref: "Products"
            }
        ]
    })
)

module.exports = AllProducts;