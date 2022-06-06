const mongoose = require("mongoose")

const Logo = mongoose.model(
    "Logo",
    new mongoose.Schema({
        image: String
    })
)

module.exports = Logo;