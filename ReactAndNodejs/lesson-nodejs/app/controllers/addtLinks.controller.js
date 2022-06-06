const db = require("../models");

const AddtLinks = db.addtLinks;


exports.getAddtLinks = async (req, res) => {
    await AddtLinks.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postAddtLinks = async (req, res) => {
    let data = []
    if(req.body.length){
        data = req.body;
    }else{
        data = [req.body];
    }

    await AddtLinks.create(data, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send({ message: "AddtLinks object(s) was added successfully!"});
    })
}