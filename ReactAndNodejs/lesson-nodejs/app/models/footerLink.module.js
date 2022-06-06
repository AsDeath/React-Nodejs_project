const mongoose = require("mongoose");

const FooterLink = mongoose.model(
    "FooterLink",
    new mongoose.Schema({
        type: String,
        name: String,
        link: String
    })
)

module.exports = FooterLink;