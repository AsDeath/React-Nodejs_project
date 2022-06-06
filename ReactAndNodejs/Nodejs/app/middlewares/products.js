const db = require("../models");
const AllProducts = db.allProducts;
const Products = db.products;
const Types = db.types;

checkExistType = (req, res, next) => {
    Types.findOne({
        type: req.body.type.slice(0,1).toUpperCase() + req.body.type.slice(1)
    }).exec((err, type) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if(!type){
            res.status(400).send({ message: "Failed! This Type doesn't exist!" });
            return;
        }

        next();
    })
}

checkProductsExist = (req, res, next) => {
    AllProducts.findOne({
        title: req.body.title
    }).exec((err, products) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        if(products){
            res.status(400).send({ message: "Failed! This TypeProducts already exist!" });
            return;
        }

        next();
    })
}

checkProductExist = (req, res, next) => {
    Products.findOne({
        name: req.body.name
    }).exec((err, products) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        if(products){
            res.status(400).send({ message: "Failed! This Product already exist!" });
            return;
        }

        next();
    })
}


const checkProducts = {
    checkExistType,
    checkProductsExist,
    checkProductExist
}

module.exports = checkProducts;