const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const passportRouter = require("./routes/passportRoutes");
const configurePassport = require("./modules/Passport");
require("dotenv").config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'front/build'))); //deberia dejar esta
app.use(express.static(path.join(__dirname, "public")));

configurePassport(app);

// app.use("/", indexRouter);
app.use("/", passportRouter);

module.exports = app;
