const db = require("../models");
const AllProducts = db.allProducts;
const Products = db.products;
const Types = db.types;

exports.getAllProducts = async (req, res) => {
    await AllProducts.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}
/* exports.getAllProducts = async (req, res) => {
    await Products.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
} */

exports.postNewProducts = async (req, res) => {
    /* await Types.findOne(
        {
            type: req.body.title.slice(0,1).toUpperCase() + req.body.title.slice(1)
        },
        async (err, type) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            if(!type){
                const newType = new Types({
                    type: req.body.title.slice(0,1).toUpperCase() + req.body.title.slice(1)
                })
                await newType.save((err, newType) => {
                    if(err){
                        res.status(500).send({message: err});
                        return;
                    }
                    res.send({ message: "NewType was added successfully!" });
                })
            }
        }
    ) */

    await Products.find(
        {
            type: req.body.title.slice(0,1).toUpperCase() + req.body.title.slice(1)
        },
        async (err, products) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            const newTypeProducts = new AllProducts({
                title: req.body.title.slice(0,1).toUpperCase() + req.body.title.slice(1),
                products: []
            })
            if(products){
                newTypeProducts.products = products.map(product => product);

                await newTypeProducts.save((err, savedNewTypeProducts) => {
                    if(err){
                        res.status(500).send({message: err});
                        return;
                    }
                    res.send({ message: "New TypeProducts was added successfully!" });
                })
            }else{
                await newTypeProducts.save((err, savedNewTypeProducts) => {
                    if(err){
                        res.status(500).send({message: err});
                        return;
                    }
                    res.send({ message: "New TypeProducts was added successfully! (Products hasn't found)" });
                })
                /* res.status(400).send({ message: "Products hasn't found!" });
                return; */
            }
        }
    )
}

exports.postProduct = async (req, res) => {
    /* let data;
    if(req.body.length){
        data = req.body.map((el) => {
            el.type = el.type.slice(0,1).toUpperCase() + el.type.slice(1);
            return el;
        });
    }else{
        data = [req.body];
        data[0].type = data[0].slice(0,1).toUpperCase() + data[0].slice(1);
    }

    await Products.create(data, async (err, result) => {
        if(err){
            res.status(500).send({message: err});
            return;
        }
        let arrayTypes = result.map((el) => {return el.type});
        let uniqueTypes = [...new Set(arrayTypes)];
        await AllProducts.find(
            {
                title: {$in: uniqueTypes}
            },
            async (err, foundAllProducts) => {
                if(err){
                    res.status(500).send({message: err});
                    return;
                }

            }
        )
    }) */
    const newProduct = new Products({
        type: req.body.type.slice(0,1).toUpperCase() + req.body.type.slice(1),
        name: req.body.name,
        image: req.body.image,
        largeImage: req.body.largeImage,
        price: req.body.price,
        description: req.body.description,
        weight: req.body.weight
    });
    await newProduct.save(async (err, newProduct) => {
        if(err){
            res.status(500).send({message: err});
            return;
        }
        //res.send({ message: "NewProduct was added successfully!" });
        await Products.find(
            {
                type: newProduct.type
            },
            async (err, products) => {
                if(err){
                    res.status(500).send({ message: err });
                    return;
                }
                if(products){
                    await AllProducts.updateOne(
                        {
                            title: newProduct.type
                        },
                        {
                            $set: { products: products.map(product => product) }
                        },
                        (err, result) => {
                            if(err){
                                res.status(500).send({message: err});
                                return;
                            }
                            if(result){
                                res.send({ message: "NewProduct was added successfully! TypeProducts was updated successfully!" });
                            }else{
                                res.send({ message: "NewProduct was added successfully! (TypeProducts hasn't found)" });
                            }
                        }
                    )
                }else{
                    res.status(400).send({ message: "Error! Products hasn't found!" });
                    return;
                }
            }
        )
    })
}