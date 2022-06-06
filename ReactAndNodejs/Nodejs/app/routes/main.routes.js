const productsController = require("../controllers/products.controller");
const mainSliderController = require("../controllers/mainSlider.controller");
const brandListController = require("../controllers/brandList.controller");
const selphonenumController = require("../controllers/selphonenum.controller");
const addtLinksController = require("../controllers/addtLinks.controller");
const navbarController = require("../controllers/navbar.controller");
const footerController = require("../controllers/footer.controller");
const logoController = require("../controllers/logo.controller");
const bagController = require("../controllers/bag.controller");
const { checkProducts, checks } = require("../middlewares");


module.exports = function(app) {
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/get/allproducts",
        productsController.getAllProducts
    )

    app.post(
        "/api/post/products",
        [checkProducts.checkProductsExist],
        productsController.postNewProducts
    )
    app.post(
        "/api/post/newproduct",
        [checkProducts.checkProductExist],
        productsController.postProduct
    )

    app.get(
        "/api/get/mainslider",
        mainSliderController.getMainSlider
    )
    app.post(
        "/api/post/mainslider",
        [checks.checkMainSliderObjectExist],
        mainSliderController.postMainSlider
    )
    
    app.get(
        "/api/get/brandlist",
        brandListController.getBrandList
    )
    app.post(
        "/api/post/brandlist",
        [checks.checkBrandListObjectExist],
        brandListController.postBrandList
    )

    app.get(
        "/api/get/selphonenum",
        selphonenumController.getSelphonenum
    )
    app.post(
        "/api/post/selphonenum",
        selphonenumController.postSelphonenum
    )

    app.get(
        "/api/get/addtlinks",
        addtLinksController.getAddtLinks
    )
    app.post(
        "/api/post/addtlinks",
        [checks.checkAddtLinksObjectExist],
        addtLinksController.postAddtLinks
    )

    app.get(
        "/api/get/navbar",
        navbarController.getNavbar
    )
    app.post(
        "/api/post/navbar",
        [checks.checkNavbarObjectExist],
        navbarController.postNavbar
    )

    app.get(
        "/api/get/submenu",
        navbarController.getSubmenu
    )
    app.post(
        "/api/post/submenu",
        [checks.checkSubmenuObjectExist],
        navbarController.postSubmenu
    )

    app.get(
        "/api/get/footertitle",
        footerController.getFooterTitle
    )
    app.post(
        "/api/post/footertitle",
        [checks.checkFooterTitleObjectExist],
        footerController.postFooterTitle
    )

    app.get(
        "/api/get/logo",
        logoController.getLogo
    )

    app.get(
        "/api/get/bag",
        bagController.getBag
    )
    app.post(
        "/api/post/bag",
        bagController.postBag
    )
    app.post(
        "/api/post/deletebagproduct",
        bagController.deleteBagProduct
    )
    app.post(
        "/api/post/deletesamebagproducts",
        bagController.deleteSameBagProducts
    )
}