const db = require("../models")

const Navbar = db.navbar;
const Submenu = db.submenu;

exports.getNavbar = async (req, res) => {
    await Navbar.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postNavbar = async (req, res) => {
    await Submenu.find(
        {
            type: req.body.name.slice(0,1).toUpperCase() + req.body.name.slice(1)
        },
        async (err, found) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            const newNavbar = new Navbar({
                link: req.body.link,
                name: req.body.name.slice(0,1).toUpperCase() + req.body.name.slice(1),
                submenu: []
            })
            if(found){
                newNavbar.submenu = found.map(el => el)

                await newNavbar.save((err, result) => {
                    if(err){
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send({ message: "Navbar was added successfully!" });
                })
            }else{
                await newNavbar.save((err, result) => {
                    if(err){
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send({ message: "Navbar was added successfully! (Submenus hasn't found!)" });
                })
                /* res.status(400).send({ message: "Submenus hasn't found!" });
                return; */
            }
        } 
    )
}

exports.getSubmenu = async (req, res) => {
    await Submenu.find({}, (err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(result);
    })
}

exports.postSubmenu = async (req, res) => {
    const newSubmenu = new Submenu({
        type: req.body.type.slice(0,1).toUpperCase() + req.body.type.slice(1),
        link: req.body.link,
        name: req.body.name
    })

    await newSubmenu.save(async (err, added) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        await Submenu.find({
            type: newSubmenu.type
        }, async (err, found) => {
            if(err){
                res.status(500).send({ message: err });
                return;
            }
            if(found){
                await Navbar.updateOne(
                    {
                        name: newSubmenu.type
                    },
                    {
                        $set: { submenu: found.map(el => el) }
                    },
                    (err, result) => {
                        if(err){
                            res.status(500).send({message: err});
                            return;
                        }
                        if(result){
                            res.send({ message: "Submenu was added successfully! Navbar was updated successfully!" });
                        }else{
                            res.send({ message: "Submenu was added successfully! (Navbar hasn't found)" });
                        }
                    }
                )
            }else{
                res.status(400).send({ message: "Error! Submenus hasn't found!" });
                return;
            }
        })
    })
}