const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.allProducts = require("./allProducts.model");
db.products = require("./products.model");
db.types = require("./typeProducts.model");
db.mainSlider = require("./mainSlider.model");
db.brandList = require("./brandList.model");
db.selphonenum = require("./selphonenum.model");
db.addtLinks = require("./addtLinks.model");
db.navbar = require("./navbar.model");
db.submenu = require("./submenu.model");
db.footerTitle = require("./footerTitle.model");
db.footerLink = require("./footerLink.module");
db.logo = require("./logo.model");
db.bag = require("./bag.model");

db.ROLES = ["user", "admin", "moderator"];
db.TYPES = ["Pizza", "Breakfast"];
module.exports = db;