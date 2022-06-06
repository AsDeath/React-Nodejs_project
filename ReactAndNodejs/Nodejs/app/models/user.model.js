const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        email: String,
        password: String,
        currency: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ],
        bag: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bag"
        }
    })
)

module.exports = User;