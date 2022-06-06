//https://andys.md/assets/img/logo.svg

const db = require("../models")

const Logo = db.logo;

exports.getLogo= async (req, res) => {
    await Logo.findOne({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}