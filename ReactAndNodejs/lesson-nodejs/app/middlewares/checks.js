const db = require("../models");
const Submenu = require("../models/submenu.model");
const methods = require("./methods");

const MainSlider = db.mainSlider;
const BrandList = db.brandList;
const AddtLinks = db.addtLinks;
const Navbar = db.navbar;
const FooterTitle = db.footerTitle;
const FooterLink = db.footerLink;

checkMainSliderObjectExist = (req, res, next) => {
    let arrayImages = [];
    if(req.body.length){
        arrayImages = req.body.map((el) => {return el.image})
    }else{
        arrayImages = [req.body.image];
    }
    MainSlider.findOne({
        image: {$in: arrayImages}
    }).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        if(result){
            res.status(400).send({ message: `Failed! MainSLider object(s) already exists in MainSlider.` });
            return;
        }
        next();
    });
}

checkBrandListObjectExist = (req, res, next) => {
    let arrayLinks = [];
    if(req.body.length){
        arrayLinks = req.body.map((el) => {return el.link})
    }else{
        arrayLinks = [req.body.link];
    }
    BrandList.findOne({
        link: {$in: arrayLinks}
    }).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        if(result){
            res.status(400).send({ message: `Failed! BrandList object(s) already exists in MainSlider.` });
            return;
        }
        next();
    });
}

checkAddtLinksObjectExist = (req, res, next) => {
    let arrayLinks = [];
    if(req.body.length){
        arrayLinks = req.body.map((el) => {return el.link})
    }else{
        arrayLinks = [req.body.link];
    }

    AddtLinks.findOne({
        link: {$in: arrayLinks}
    }).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        if(result){
            res.status(400).send({ message: `Failed! AddtLinks object(s) already exists in MainSlider.` });
            return;
        }
        next();
    })
}

checkNavbarObjectExist = (req, res, next) => {
    Navbar.findOne({
        name: req.body.name.slice(0,1).toUpperCase() + req.body.name.slice(1)
    }).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err} );
            return;
        }
        if(result){
            res.status(400).send({ message: "Failed! This Navbar already exist!" });
            return;
        }

        next();
    })
}
checkSubmenuObjectExist = (req, res, next) => {
    Submenu.findOne({
        link: req.body.link + req.body.link
    }).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err} );
            return;
        }
        if(result){
            res.status(400).send({ message: "Failed! This Submenu already exist!" });
            return;
        }

        next();
    })
}

checkFooterTitleObjectExist = (req, res, next) => {
    FooterTitle.findOne({
        title: methods.capitalize(req.body.title)
    }).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err} );
            return;
        }
        if(result){
            res.status(400).send({ message: "Failed! This FooterTitle already exist!" });
            return;
        }

        next();
    })
}
checkFooterLinkObjectExist = (req, res, next) => {
    FooterLink.findOne({
        link: req.body.link
    }).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err} );
            return;
        }
        if(result){
            res.status(400).send({ message: "Failed! This FooterLink already exist!" });
            return;
        }

        next();
    })
}

const checks = {
    checkMainSliderObjectExist,
    checkBrandListObjectExist,
    checkAddtLinksObjectExist,
    checkNavbarObjectExist,
    checkSubmenuObjectExist,
    checkFooterTitleObjectExist,
    checkFooterLinkObjectExist
}

module.exports = checks