const mongoose = require("mongoose");

const Navbar = mongoose.model(
    "Navbar",
    new mongoose.Schema({
        link: String,
        name: String,
        submenu: [{
            type: mongoose.Schema.Types.Object,
            ref: "Submenu"
        }]
    })
)

module.exports = Navbar;