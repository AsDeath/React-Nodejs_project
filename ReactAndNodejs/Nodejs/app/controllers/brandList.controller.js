const db = require("../models")

const BrandList = db.brandList;

exports.getBrandList = async (req, res) => {
    await BrandList.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postBrandList = async (req, res) => {
    let data;
    if(req.body.length){
        data = req.body;
    }else{
        data = [req.body];
    }

    await BrandList.create(data, (err, result) => {
        if(err){
            res.status(500).send(err);
            return;
        }
        res.status(200).send({ message: "BrandList object(s) was added successfully!" });
    });
}