const mongoose = require("mongoose")

const BrandList = mongoose.model(
    "BrandList",
    new mongoose.Schema({
        image: String,
        link: String
    })
)

module.exports = BrandList;