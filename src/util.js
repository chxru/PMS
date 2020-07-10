const crypto = require("crypto");

const { PATIENT, USER } = require("./database/db");
const { createUser } = require("./database/crypto");

exports.addPatient = (evt, doc) => {
  PATIENT.insert(doc, (err, newDoc) => {
    if (err) throw err;
    console.log(newDoc);
  });
};

exports.checkUnamePwd = (evt, { username, password }) => {
  USER.find({ username }, (err, doc) => {
    crypto.scrypt(password, doc[0].salt, 32, (err, derivedKey) => {
      if (err) throw err;
      evt.reply("checkedPwd", derivedKey.toString("hex") === doc[0].hash);
    });
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

exports.searchByName = (evt, name) => {
  PATIENT.find({ lname: new RegExp(name, "gi") }, (err, docs) => {
    if (err) console.log(err);
    evt.reply("search-result-out", docs);
  });
};
