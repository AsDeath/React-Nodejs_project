const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Bag = db.bag;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { mongoose } = require("../models");

exports.signup = (req, res) => {
        if(req.body.roles){
          Role.find(
          {
            name: { $in: req.body.roles }
          },
          (err, roles) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            Bag.create({
              //userId: 0,
              products: []
            }, async (err, createdBag) => {
              User.create({
                email: req.body.email,
                password: req.body.password,
                roles: roles.map(role => role._id),
                currency: "mdl",
                bag: await Bag.findById(createdBag._id)
              }, (err, createdUser) => {
                if(err){
                  res.status(500).send({ message: err });
                  return;
                }
                Bag.findByIdAndUpdate(
                  createdBag._id,
                  {userId: createdUser._id},
                  (err, result) => {
                    if (err) {
                      res.status(500).send({ message: err });
                      return;
                    }
                    res.send({ message: "User was registered successfully!" });
                  })
              })
            })
          })
        }else{
          Role.findOne({ name: "user" }, (err, role) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            Bag.create({
              //userId: mongoose.Types.ObjectId("0000aaa0aa000a000000a0a0"),
              products: []
            }, async (err, createdBag) => {
              if(err){
                res.status(500).send({ message: err });
                return;
              }
              console.log(createdBag);
              User.create({
                email: req.body.email,
                password: req.body.password,
                roles: [role._id],
                currency: "mdl",
                bag: createdBag._id //await Bag.findById(createdBag._id)
              }, (err, createdUser) => {
                if(err){
                  res.status(500).send({ message: err });
                  return;
                }
                Bag.findByIdAndUpdate(
                  createdBag._id,
                  {userId: createdUser._id},
                  (err, result) => {
                    if (err) {
                      res.status(500).send({ message: err });
                      return;
                    }
                    res.send({ message: "User was registered successfully!" });
                  })
              })
            })
          })
        }
}

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      /* var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      ); */
      var passwordIsValid = user.password == req.body.password ? true : false;
      

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    });
};