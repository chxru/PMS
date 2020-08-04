const { PATIENT } = require("../database/db");

exports.addPatient = (evt, doc) => {
  PATIENT.insert(doc, (err, newDoc) => {
    if (err) throw err;
    console.log(newDoc);
  });
};

exports.searchByName = (evt, name) => {
  PATIENT.find({ lname: new RegExp(name, "gi") }, (err, docs) => {
    if (err) console.log(err);
    evt.reply("search-result-out", docs);
  });
};
