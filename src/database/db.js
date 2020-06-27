const Datastore = require("nedb");
const path = require("path");

const { encrypt, decrypt } = require("./crypto");

const db = {};

// databases defining
db.users = new Datastore({
  filename: path.join(process.cwd(), "data", "users.db"), // provide a path to the database file
  autoload: true, // automatically load the database
  timestampData: true, // automatically add and manage the fields createdAt and updatedAt
});

db.patients = new Datastore({
  filename: path.join(process.cwd(), "data", "patient.db"),
  autoload: true,
  timestampData: true,
  afterSerialization: (doc) => encrypt(doc),
  beforeDeserialization: (doc) => decrypt(doc),
});

exports.USER = db.users;
exports.PATIENT = db.patients;
