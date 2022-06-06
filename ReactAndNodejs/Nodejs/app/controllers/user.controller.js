const db = require("../models")
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = async (req, res) => {
  await User.findById(req.userId, (err, user) => {
    if(err){
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({
        id: user._id,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
  })
  //res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};