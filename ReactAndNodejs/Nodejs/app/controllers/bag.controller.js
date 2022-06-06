const db = require("../models");

const Bag = db.bag;
const User = db.user;
//const Products = db.products;

exports.getBag = (req, res) => {
    let userId = req.headers["userid"];
    User.findById(userId, (err, user) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        Bag.findById(user.bag).populate("products", "-__v").exec((err, result) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            if(result){
                res.status(200).send(result.products);
            }else{
                res.status(200).send({message: "Your bag is empty"});
            }
        })
    })
}

exports.deleteBagProduct = async (req, res) => {
    /* let userId = req.headers["userid"];
    let productId = req.headers["productid"]; */
    User.findById(req.body.userId, (err, user) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        Bag.findById(
            user.bag,
            /* {$pull: {products: req.body.productId}},
            {safe: true, upsert: true, new : true}, */
            (err, bag) => {
                if(err){
                    res.status(500).send({ message: err });
                    return;
                }
                let arrayProducts = bag.products;
                for(let i = 0; i < arrayProducts.length; i++){
                    if(arrayProducts[i] == req.body.productId){
                        arrayProducts.splice(i, 1);
                        break;
                    }
                }
                Bag.findByIdAndUpdate(
                    user.bag,
                    {$set: {products: arrayProducts}},
                    {safe: true, upsert: true, new : true}
                ).populate("products", "-__v").exec((err, result) => {
                    if(err){
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.status(200).send(result.products);
                })

            }
        )
    })
}
exports.deleteSameBagProducts = async (req, res) => {
    User.findById(req.body.userId, (err, user) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        Bag.findByIdAndUpdate(
            user.bag,
            {$pull: {products: req.body.productId}},
            {safe: true, upsert: true, new : true}
        ).populate("products", "-__v").exec((err, result) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send(result.products);
        })
    })
}

exports.postBag = async (req, res) => {
    User.findById(req.body.userId, (err, user) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        Bag.findByIdAndUpdate(
            user.bag,
            {$push: {products: req.body.productId}},
            {safe: true, upsert: true, new : true}
        ).populate("products", "-__v").exec((err, result) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send(result.products);
        })
    })
}