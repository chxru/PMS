const crypto = require("crypto");

const { DB, initPatientDB } = require("./database/db");
const { createUser } = require("./database/crypto");

exports.addPatient = (evt, doc) => {
  DB.PATIENT.insert(doc, (err, newDoc) => {
    if (err) throw err;
    evt.reply("patient-add-res", err);
  });
};

exports.appInit = (evt) => {
  DB.USER.find({}, (err, docs) => {
    if (err) throw err;
    let isAccount = !(docs.length == 0);
    evt.reply("app-init-res", isAccount);
  });
};

exports.checkUnamePwd = (evt, { username, password }) => {
  DB.USER.find({ username }, (err, doc) => {
    crypto.scrypt(password, doc[0].salt, 32, (err, derivedKey) => {
      if (err) throw err;
      let result = derivedKey.toString("hex") === doc[0].hash;
      if (result) initPatientDB(password);
      evt.reply("checkedPwd", result);
    });
  });
};

exports.createUser = (evt, doc) => {
  createUser(doc.password, (salt, hash) => {
    DB.USER.insert({ username: doc.username, salt, hash }, (err, newDoc) => {
      if (err) throw err;
      initPatientDB(doc.password);
      evt.reply("userCreated", true);
    });
  });
};

exports.searchByName = (evt, name) => {
  DB.PATIENT.find({ lname: new RegExp(name, "gi") }, (err, docs) => {
    if (err) console.log(err);
    evt.reply("search-result-out", docs);
  });
};
