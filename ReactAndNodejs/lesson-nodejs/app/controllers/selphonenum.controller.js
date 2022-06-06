const db = require("../models")

const Selphonenum = db.selphonenum;

exports.getSelphonenum = async (req, res) => {
    await Selphonenum.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postSelphonenum = async (req, res) => {
    let data;
    if(req.body.length){
        data = req.body;
    }else{
        data = [req.body];
    }

    await Selphonenum.create(data, (err, result) => {
        if(err){
            res.status(500).send(err);
            return;
        }
        res.status(200).send({ message: "Selphonenum object(s) was added successfully!" });
    });
}