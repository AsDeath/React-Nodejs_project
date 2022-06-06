const mongoose = require("mongoose")

const Bag = mongoose.model(
    "Bag",
    new mongoose.Schema({
        userId: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products"
            }
        ]
    })
)

module.exports = Bag;