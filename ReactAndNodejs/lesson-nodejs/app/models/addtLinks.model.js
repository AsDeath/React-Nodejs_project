const mongoose = require("mongoose");

const AddtLinks = mongoose.model(
    "AddtLinks",
    new mongoose.Schema({
        name: String,
        link: String
    })
)

module.exports = AddtLinks;