const db = require("./app/models");

const Products = db.products;
const AllProducts = db.allProducts;
const MainSlider = db.mainSlider;
const BrandList = db.brandList;
const Selphonenum = db.selphonenum;
const AddtLinks = db.addtLinks;
const Submenu = db.submenu;
const Navbar = db.navbar;
const FooterTitle = db.footerTitle;
const FooterLink = db.footerLink;
const Logo = db.logo;
const User = db.user;
const Role = db.role;

const createBaseProducts = async () => {
  await Products.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Products.create([
        {
          type: "Monitors",
          name: "GIGABYTE M32UC",
          link: "/0",
          image: "https://c1.neweggimages.com/ProductImage/24-012-049-01.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-049-01.jpg",
          price: 699.99,
          description:
            "32inch 144Hz 4K UHD Curved Gaming Monitor, SS VA, 3840x2160 Display, 1ms Response Time (MPRT), 1x DisplayPort 1.4, 2x HDMI 2.1, 1x USB Type-C, 3x USB 3.2 Downstream",
          weight: 32,
        },
        {
          type: "Monitors",
          name: "GIGABYTE G27Q",
          link: "/1",
          image: "https://c1.neweggimages.com/ProductImage/24-012-015-01.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-015-01.jpg",
          price: 249.99,
          description:
            "27inch 144Hz 1440P Gaming Monitor, 2560 x 1440 IPS Display, 1ms (MPRT) Response Time, 92% DCI-P3, VESA Display HDR400, FreeSync Premium, 1x DisplayPort 1.2, 2x HDMI 2.0, 2x USB 3.0, Height Adjustable",
          weight: 27,
        },
        {
          type: "Monitors",
          name: "Z-EDGE U24I",
          link: "/2",
          image:
            "https://c1.neweggimages.com/ProductImage/V3SWS201112vRqyF.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/V3SWS201112vRqyF.jpg",
          price: 139.99,
          description:
            "24inch Full HD 1920 x 1080 75Hz 5ms (GTG) HDMI VGA Eye Care with Low Blue-Light Ultra Thin Frame LED Backlit IPS Monitor",
          weight: 24,
        },
        {
          type: "Monitors",
          name: "MSI Optix MAG321CQR",
          link: "/3",
          image: "https://c1.neweggimages.com/ProductImage/24-475-024-V03.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/24-475-024-V03.jpg",
          price: 299.99,
          description:
            "32inch WQHD Non-Glare Super Narrow Bezel 1ms 2560 x 1440 Resolution 144Hz Refresh Rate FreeSync Technology Height Adjustable Curved Monitor",
          weight: 32,
        },
        {
          type: "Monitors",
          name: "SAMSUNG Odyssey G3 LS24AG302NNXZA",
          link: "/4",
          image: "https://c1.neweggimages.com/ProductImage/24-022-994-V13.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/24-022-994-V13.jpg",
          price: 179.99,
          description:
            "24inch Full HD 1920 x 1080 144Hz 1ms HDMI, DisplayPort AMD FreeSync Tilt Swivel Pivot Height Adjust Gaming Monitor",
          weight: 24,
        },
        {
          type: "Processors",
          name: "Intel Celeron G5900",
          link: "/0",
          image:
            "https://c1.neweggimages.com/ProductImage/A6ZPD200528BHTPE.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/A6ZPD200528BHTPE.jpg",
          price: 0.99,
          description:
            "Celeron Comet Lake Dual-Core 3.4 GHz LGA 1200 58W Intel UHD Graphics 610 Desktop Processor - BX80701G5900",
          weight: "",
        },
        {
          type: "Processors",
          name: "AMD Ryzen 7 5800X",
          link: "/1",
          image: "https://c1.neweggimages.com/ProductImage/19-113-665-V01.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-665-V01.jpg",
          price: 306.99,
          description:
            "Ryzen 7 5000 Series Vermeer (Zen 3) 8-Core 3.8 GHz Socket AM4 105W Desktop Processor - 100-100000063WOF",
          weight: "",
        },
        {
          type: "Processors",
          name: "Intel Core i9-11900K",
          link: "/2",
          image: "https://c1.neweggimages.com/ProductImage/19-118-231-03.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-231-03.jpg",
          price: 371.99,
          description:
            "Core i9 11th Gen Rocket Lake 8-Core 3.5 GHz LGA 1200 125W Intel UHD Graphics 750 Desktop Processor - BX8070811900K",
          weight: "",
        },
        {
          type: "Processors",
          name: "AMD Ryzen 9 5900X",
          link: "/3",
          image: "https://c1.neweggimages.com/ProductImage/19-113-664-V01.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-664-V01.jpg",
          price: 399.99,
          description:
            "Ryzen 9 5000 Series Vermeer (Zen 3) 12-Core 3.7 GHz Socket AM4 105W Desktop Processor - 100-100000061WOF",
          weight: "",
        },
        {
          type: "Processors",
          name: "Intel Core i7-12700K",
          link: "/4",
          image: "https://c1.neweggimages.com/ProductImage/19-118-343-05.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-343-05.jpg",
          price: 384.99,
          description:
            "Core i7 12th Gen Alder Lake 12-Core (8P+4E) 3.6 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor - BX8071512700K",
          weight: "",
        },
        {
          type: "Videocards",
          name: "ASUS ROG Strix GeForce RTX 3060",
          link: "/0",
          image: "https://c1.neweggimages.com/ProductImage/14-126-522-V18.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-522-V18.jpg",
          price: 489.99,
          description:
            "12GB GDDR6 PCI Express 4.0 Video Card ROG-STRIX-RTX3060-O12G-V2-GAMING",
          weight: "",
        },
        {
          type: "Videocards",
          name: "MSI Ventus GeForce RTX 3060",
          link: "/1",
          image: "https://c1.neweggimages.com/ProductImage/14-137-632-V05.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-632-V05.jpg",
          price: 429.99,
          description:
            "12GB GDDR6 PCI Express 4.0 Video Card RTX 3060 Ventus 2X 12G OC",
          weight: "",
        },
        {
          type: "Videocards",
          name: "EVGA GeForce RTX 3070 Ti",
          link: "/2",
          image: "https://c1.neweggimages.com/ProductImage/14-487-550-V30.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/14-487-550-V30.jpg",
          price: 759.99,
          description:
            "FTW3 ULTRA GAMING Video Card, 08G-P5-3797-KL, 8GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate",
          weight: "",
        },
        {
          type: "Videocards",
          name: "XFX SPEEDSTER MERC319 AMD Radeon RX 6900 XT",
          link: "/3",
          image: "https://c1.neweggimages.com/ProductImage/14-150-859-V04.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/14-150-859-V04.jpg",
          price: 899.99,
          description:
            "LIMITED BLACK Gaming Graphics Card with 16GB GDDR6, AMD RDNA 2, RX-69XTACSD9",
          weight: "",
        },
        {
          type: "Videocards",
          name: "EVGA GeForce RTX 3090",
          link: "/4",
          image: "https://c1.neweggimages.com/ProductImage/14-487-526-V01.jpg",
          largeImage:
            "https://c1.neweggimages.com/ProductImageCompressAll1280/14-487-526-V01.jpg",
          price: 1699.99,
          description:
            "FTW3 ULTRA GAMING Video Card, 24G-P5-3987-KR, 24GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate",
          weight: "",
        },
      ]).then(async () => {
        await AllProducts.find({}, async (err, allProducts) => {
          if (err) {
            console.error(err);
            return;
          }
          allProducts.forEach(async (element) => {
            await AllProducts.findByIdAndUpdate(
              element._id,
              {
                $push: {
                  products: await Products.find({ type: element.title }),
                },
              },
              { new: true, useFindAndModify: false }
            );
          });
        });
      });
    }
  });
};

const createBaseAllProducts = async () => {
  const types = ["Pizza"];
  await AllProducts.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await AllProducts.create([
        {
          title: "Monitors",
          link: "/products/0",
          products: [],
        },
        {
          title: "Processors",
          link: "/products/1",
          products: [],
        },
        {
          title: "Videocards",
          link: "/products/2",
          products: [],
        },
      ]);
    }
  });
};

const createBaseMainSlider = async () => {
  await MainSlider.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await MainSlider.create([
        {
          image: "https://promotions.newegg.com/intel/22-0614/1920x660.jpg",
        },
        {
          image: "https://promotions.newegg.com/nepro/22-1013/1920x660.jpg",
        },
        {
          image: "https://promotions.newegg.com/nepro/22-1000/1920x660.jpg",
        },
        {
          image: "https://promotions.newegg.com/abs/22-0973/1920x660.jpg",
        },
      ]);
    }
  });
};

const createBaseBrandList = async () => {
  await BrandList.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await BrandList.create([
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",
          link: "https://www.intel.com/",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
          link: "https://www.amd.com/",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
          link: "https://www.asus.com/",
        },
      ]);
    }
  });
};

const createBaseRole = async () => {
  await Role.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Role.create([
        {
          name: "user",
        },
        {
          name: "moderator",
        },
        {
          name: "admin",
        },
      ]);
    }
  });
};

const createBaseSelphonenum = async () => {
  await Selphonenum.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Selphonenum.create([
        {
          city: "Chisinau",
          number: "022 210-210",
        },
        {
          city: "Balti",
          number: "023 120-210",
        },
        {
          city: "Ceadar Lunga",
          number: "079 22-44-66",
        },
        {
          city: "Cahul",
          number: "078 848 484",
        },
        {
          city: "Comrat",
          number: "078 22-00-88",
        },
      ]);
    }
  });
};

const createBaseAddtLinks = async () => {
  await AddtLinks.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await AddtLinks.create([
        {
          name: "Ro",
          link: "/ro",
        },
        {
          name: "En",
          link: "/en",
        },
        {
          name: "Ru",
          link: "/ru",
        },
      ]);
    }
  });
};

const createBaseNavbar = async () => {
  await Navbar.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Navbar.create([
        {
          link: "/products",
          name: "Catalog",
          submenu: [],
        },
        {
          link: "/promotions",
          name: "Promotions",
          submenu: [],
        },
        {
          link: "/news",
          name: "News",
          submenu: [],
        },
      ]);
    }
  });
};

const createBaseSubmenus = async () => {
  await Submenu.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Submenu.create([
        {
          type: "Catalog",
          link: "/products/0",
          name: "Monitors",
        },
        {
          type: "Catalog",
          link: "/products/1",
          name: "Processors",
        },
        {
          type: "Catalog",
          link: "/products/2",
          name: "Videocards",
        },
      ]).then(async () => {
        await Navbar.find({}, async (err, found) => {
          if (err) {
            console.error(err);
            return;
          }
          found.forEach(async (element) => {
            await Navbar.findByIdAndUpdate(
              element._id,
              {
                $push: {
                  submenu: await Submenu.find({ type: element.name }),
                },
              },
              { new: true, useFindAndModify: false }
            );
          });
        });
      });
    }
  });
};

const createBaseFooterTitles = async () => {
  await FooterTitle.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await FooterTitle.create([
        {
          title: "Company",
          links: [],
        },
        {
          title: "Services",
          links: [],
        },
        {
          title: "Delivery Terms",
          links: [],
        },
      ]);
    }
  });
};

const createBaseFooterLinks = async () => {
  await FooterLink.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      FooterLink.create([
        {
          type: "Company",
          link: "",
          name: "Career",
        },
        {
          type: "Company",
          link: "",
          name: "Feedback",
        },
        {
          type: "Company",
          link: "",
          name: "Contacts",
        },
        //////////////////////////
        {
          type: "Services",
          link: "",
          name: "Client card",
        },
        {
          type: "Services",
          link: "",
          name: "Corporate clients",
        },
        /* {
          type: "Services",
          link: "",
          name: "Kids parties",
        },
        {
          type: "Services",
          link: "",
          name: "Banquets",
        }, */
        /////////////////////////////
        {
          type: "Delivery Terms",
          link: "",
          name: "Chisinau",
        },
        {
          type: "Delivery Terms",
          link: "",
          name: "Balti",
        },
        {
          type: "Delivery Terms",
          link: "",
          name: "Cahul",
        },
        {
          type: "Delivery Terms",
          link: "",
          name: "Comrat",
        },
        {
          type: "Delivery Terms",
          link: "",
          name: "Ceadar Lunga",
        },
      ]).then(async () => {
        await FooterTitle.find({}, async (err, found) => {
          if (err) {
            console.error(err);
            return;
          }
          found.forEach(async (element) => {
            await FooterTitle.findByIdAndUpdate(
              element._id,
              {
                $push: {
                  links: await FooterLink.find({ type: element.title }),
                },
              },
              { new: true, useFindAndModify: false }
            );
          });
        });
      });
    }
  });
};

const createBaseLogo = async () => {
  await Logo.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Logo.create([
        {
          image: "https://andys.md/assets/img/logo.svg",
        },
      ]);
    }
  });
};

const createBaseCollections = {
  createBaseAllProducts,
  createBaseProducts,
  createBaseBrandList,
  createBaseMainSlider,
  createBaseSelphonenum,
  createBaseAddtLinks,
  createBaseNavbar,
  createBaseSubmenus,
  createBaseFooterTitles,
  createBaseFooterLinks,
  createBaseLogo,
  createBaseRole,
};

module.exports = createBaseCollections;
