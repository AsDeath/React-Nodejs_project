const methods = require("../middlewares/methods");
const db = require("../models")

const FooterTitle = db.footerTitle;
const FooterLink = db.footerLink;

exports.getFooterTitle = async (req, res) => {
    await FooterTitle.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postFooterTitle = async (req, res) => {
    await FooterLink.find(
        {
            type: methods.capitalize(req.body.title)
        },
        async (err, found) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            const newFooterTitle = new FooterTitle({
                title: methods.capitalize(req.body.title),
                links: []
            })
            if(found){
                newFooterTitle.links = found.map(el => el)

                await newFooterTitle.save((err, result) => {
                    if(err){
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send({ message: "FooterTitle was added successfully!" });
                })
            }else{
                await newNavbar.save((err, result) => {
                    if(err){
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send({ message: "FooterTitle was added successfully! (FooterLinks hasn't found!)" });
                })
                /* res.status(400).send({ message: "Submenus hasn't found!" });
                return; */
            }
        } 
    )
}

exports.getFooterLink = async (req, res) => {
    await FooterLink.findOne({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postFooterLink = async (req, res) => {
    const newFooterLink = new Submenu({
        type: capitalize(req.body.type),
        link: req.body.link,
        name: req.body.name
    })

    await newFooterLink.save(async (err, added) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        await FooterLink.find({
            type: newFooterLink.type
        }, async (err, found) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            if(found){
                await FooterTitle.updateOne(
                    {
                        title: newFooterLink.type
                    },
                    {
                        $set: { links: found.map(el => el) }
                    },
                    (err, result) => {
                        if(err){
                            res.status(500).send({message: err});
                            return;
                        }
                        if(result){
                            res.send({ message: "FooterLink was added successfully! FooterTitle was updated successfully!" });
                        }else{
                            res.send({ message: "FooterLink was added successfully! (FooterTitle hasn't found)" });
                        }
                    }
                )
            }else{
                res.status(400).send({ message: "Error! FooterLink hasn't found!" });
                return;
            }
        })
    })
}