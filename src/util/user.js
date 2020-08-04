const crypto = require("crypto");

const { USER } = require("../database/db");
const { createUser, createSUser } = require("../database/crypto");

exports.checkUnamePwd = (evt, { username, password }) => {
  USER.find({ username }, (err, doc) => {
    crypto.scrypt(password, doc[0].salt, 32, (err, derivedKey) => {
      if (err) throw err;
      evt.reply("checkedPwd", derivedKey.toString("hex") === doc[0].hash);
    });
  });
};

exports.createSuperUser = (evt, doc) => {
  createSUser(doc.password, (salt, hash, mkeySalt, mkeyHash) => {
    USER.insert(
      { username: doc.username, salt, hash, role: "super-user" },
      (err) => {
        if (err) throw err;
        USER.insert({ mkeySalt, mkeyHash }, (err2) => {
          if (err2) throw err2;
          evt.reply("superUserCreated", true);
        });
      }
    );
  });
};

exports.createUser = (evt, doc) => {
  createUser(doc.password, (salt, hash) => {
    USER.insert({ username: doc.username, salt, hash }, (err, newDoc) => {
      if (err) throw err;
      evt.reply("userCreated", true);
    });
  });
};
