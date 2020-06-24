const Datastore = require("nedb");
const path = require("path");

const { encrypt, decrypt } = require("./crypto");

const db = {};

// databases defining
db.users = new Datastore({
  filename: path.join(process.cwd(), "data", "users.db"), // provide a path to the database file
  autoload: true, // automatically load the database
  timestampData: true, // automatically add and manage the fields createdAt and updatedAt
  afterSerialization: (doc) => encrypt(doc),
  beforeDeserialization: (doc) => decrypt(doc),
});

exports.USER = db.users;
