const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const mongo = require("./MongoUtils");
const crypto = require("crypto");
require("dotenv").config();

passport.use(
  new Strategy((username, password, cb) => {
    mongo.passport.findUser(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      const isValid = validPassword(password, user.hash, user.salt);
      if (!isValid) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

passport.serializeUser(function (user, cb) {
  console.log(console.log(user._id));
  cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

const configurePassport = (app) => {
  app.use(require("body-parser").urlencoded({ extended: true }));
  app.use(
    require("express-session")({
      secret: process.env.SECRET || "yUQz+:ZS-5pK=,7bcR!%r&P)UW[Xv=",
      resave: false,
      saveUninitialized: false,
      cookie: { expires: new Date(Date.now() + 900000) },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = configurePassport;

// Helper functiona
function validPassword(password, hash, salt) {
  var hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
}

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
