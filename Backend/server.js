const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// password encryption
const { encrypt, decrypt } = require("./EncryptionHandler");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

///admin panel route
const adminPanel = require("./routes/company/AdminPanel");
app.use(adminPanel);

///admin panel ddelivery route
const adminPanelDelivery = require("./routes/company/AdminPanelDelivery");
app.use(adminPanelDelivery);

///admin panel ddelivery route
const adminPanelReport = require("./routes/company/AdminReport");
app.use(adminPanelReport);

//Login and Register Route
const regLogin = require("./routes/Register");
app.use(regLogin);

//delivery agent route
const DAgent = require("./routes/DeliveryAgent");
app.use(DAgent);

//farmer app route
const Farmer = require("./routes/Farmer");
app.use(Farmer);

//fertilizer store route
const Store = require("./routes/store/Store");
app.use(Store);

const ContactUs = require("./routes/ContactUs");
app.use(ContactUs);

///admin panel home page
// const HomePageAdmin=require('./routes/company/HomePageAdmin.js');
// app.use(HomePageAdmin);

const PORT=process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("running port 4000");
});
