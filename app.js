const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const db = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const errorController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use(errorController.get404);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
