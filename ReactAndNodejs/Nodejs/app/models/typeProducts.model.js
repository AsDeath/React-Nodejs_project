const mongoose = require("mongoose");

const Types = mongoose.model(
    "TypeProducts",
    new mongoose.Schema({
        type: String
    })
)

module.exports = Types;