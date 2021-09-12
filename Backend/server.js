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

//Login and Register Route
const regLogin = require("./routes/Register");
app.use(regLogin);

//delivery agent route
const DAgent = require("./routes/DeliveryAgent");
app.use(DAgent);

//farmer app route
const Farmer = require("./routes/Farmer");
app.use(Farmer);

app.listen(4000, () => {
  console.log("running port 4000");
});
