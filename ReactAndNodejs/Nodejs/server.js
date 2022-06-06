const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const createBaseCollections = require("./createBaseCollections");

const app = express();

var corsOptions = {
    origin: "http://localhost:3006"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./app/models");
const { createBaseNavbar } = require("./createBaseCollections");
const Role = db.role;
const Types = db.types;

db.mongoose.connect(`mongodb+srv://${dbConfig.HOST}:${dbConfig.DB}@cluster0.n1rbi.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
})

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Andis App application." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/main.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

async function initial(){
    await createBaseCollections.createBaseRole();

    await createBaseCollections.createBaseAllProducts(); //first
    await createBaseCollections.createBaseProducts(); //second

    await createBaseCollections.createBaseBrandList();
    await createBaseCollections.createBaseMainSlider();
    await createBaseCollections.createBaseSelphonenum();
    await createBaseCollections.createBaseAddtLinks();

    await createBaseCollections.createBaseNavbar(); //first
    await createBaseCollections.createBaseSubmenus(); //second

    await createBaseCollections.createBaseFooterTitles(); //first
    await createBaseCollections.createBaseFooterLinks(); //second

    await createBaseCollections.createBaseLogo();
}