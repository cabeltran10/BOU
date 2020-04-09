const express = require("express");
const router = express.Router();
const passport = require("passport");
const crypto = require("crypto");
const mongo = require("../modules/MongoUtils");

router.get("/login", function (req, res) {
  console.log("hizo gettt");
  res.redirect("/");
});

router.post(
  "/login", passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    console.log("Loggeado");
    res.redirect("/");
  }
);

router.get("/getUser", function (req, res) {
  console.log(req.user);
  res.json(req.user || null);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/profile", function (req, res) {
  res.render("profile", { user: req.user });
});

router.post("/register", (req, res) => {
  console.log("Req del POST", req.body);
  if (req.body.password !== req.body.password2Register) {
    console.log("passwords are not equals");
    res.redirect("/");
  } else {
    const saltHash = genPassword(req.body.password);
    const salt = saltHash.salt,
      hash = saltHash.hash,
      correo = req.body.emailRegister,
      name = req.body.nameRegister,
      phone = req.body.phoneRegister;
    const newUser = {
      username: req.body.username,
      hash: hash,
      salt: salt,
      email: correo,
      name: name,
      phone,
    };
    mongo.users.insert(newUser).finally(() => {
      res.redirect(307, "/login");
    });
  }
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

// Development purposes
router.get("/user", (req, res) => {
  console.log("User info", req.user);
  const user = req.user;
  if (user) res.send("<h1>Welcome back! " + req.user.username + "</h1>");
  else res.send("<h1>Welcome</h1>");
});
