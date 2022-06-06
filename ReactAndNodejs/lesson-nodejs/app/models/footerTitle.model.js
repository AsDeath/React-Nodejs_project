const mongoose = require("mongoose");

const FooterTitle = mongoose.model(
    "FooterTitle",
    new mongoose.Schema({
        title: String,
        links: [{
            type: mongoose.Schema.Types.Object,
            ref: "FooterLink"
        }]
    })
)

module.exports = FooterTitle;