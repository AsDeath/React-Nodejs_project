const mongoose = require("mongoose");

const Submenu = mongoose.model(
    "Submenu",
    new mongoose.Schema({
        type: String,
        link: String,
        name: String
    })
)

module.exports = Submenu;