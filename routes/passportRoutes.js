const express = require("express");
const router = express.Router();
const passport = require("passport");
const crypto = require("crypto");
const mongo = require("../modules/MongoUtils");
const passwordValidator = require('password-validator');
const emailValdator = require("email-validator");

router.get("/login", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    console.log("post");
    res.redirect("/");
  }
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/profile", function (req, res) {
  res.render("profile", { user: req.user });
});

router.post("/register", (req, res) => {
  console.log("Req del POST",req.body);

  const saltHash = genPassword(req.body.passwordRegister);
  
  const salt = saltHash.salt,
    hash = saltHash.hash,
    correo = req.body.emailRegister,
    name = req.body.nameRegister,
    phone = req.body.phoneRegister;
  const newUser = {
    username: req.body.usernameRegister,
    hash: hash,
    salt: salt,
    email: correo,
    name: name,
    phone 
  };
  mongo.passport.insert(newUser)
    .finally(() => {
      res.redirect("/login");
    });
});


module.exports = router;


// Password generator for registered users
function genPassword(password) {
  var salt = crypto.randomBytes(32).toString("hex");
  var genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
}