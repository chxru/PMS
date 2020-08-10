const Datastore = require("nedb");
const path = require("path");

const { encryptPatientDB, decryptPatientDB, generateKey } = require("./crypto");

const db = {};

// databases defining
db.USER = new Datastore({
  filename: path.join(process.cwd(), "data", "users.db"), // provide a path to the database file
  autoload: true, // automatically load the database
  timestampData: true, // automatically add and manage the fields createdAt and updatedAt
});

db.PATIENT = undefined;
const updatePATIENT = (key) => {
  db.PATIENT = new Datastore({
    filename: path.join(process.cwd(), "data", "patient.db"),
    autoload: true,
    timestampData: true,
    afterSerialization: (doc) => encryptPatientDB(doc, key),
    beforeDeserialization: (doc) => decryptPatientDB(doc, key),
  });
};

exports.initPatientDB = (secret) => {
  generateKey(secret, (key) => updatePATIENT(key));
};
exports.DB = db;
