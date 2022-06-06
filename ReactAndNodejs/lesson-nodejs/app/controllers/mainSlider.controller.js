const db = require("../models")

const MainSlider = db.mainSlider;

exports.getMainSlider = async (req, res) => {
    await MainSlider.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postMainSlider = async (req, res) => {
    let data;
    if(req.body.length){
        data = req.body;
    }else{
        data = [req.body];
    }
    
    await MainSlider.create(data, (err, result) => {
        if(err){
            res.status(500).send(err);
            return;
        }
        res.status(200).send({ message: "MainSlider object(s) was added successfully!" });
    });
}