const mongoose = require("mongoose")

const Selphonenum = mongoose.model(
    "Selphonenum",
    new mongoose.Schema({
        city: String,
        number: String
    })
)

module.exports = Selphonenum;