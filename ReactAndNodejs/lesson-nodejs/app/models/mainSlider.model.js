const mongoose = require("mongoose")

const MainSlider = mongoose.model(
    "MainSlider",
    new mongoose.Schema({
        image: String
    })
)

module.exports = MainSlider;
