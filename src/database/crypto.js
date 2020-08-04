const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.scryptSync("password", "salt", 32);

const generateSalt = () => {
  return crypto.randomBytes(16).toString("hex");
};

const scryptPWD = (password, callback) => {
  if (typeof password == "object") password = JSON.stringify(password);
  const salt = generateSalt();
  crypto.scrypt(password, salt, 32, (err, derivedKey) => {
    if (err) throw err;
    callback(salt, derivedKey.toString("hex"));
  });
};

exports.createSUser = (password, callback) => {
  const masterKey = { value: generateSalt() };
  scryptPWD(password, (salt, hash) => {
    // encrypt masterkey
    scryptPWD(masterKey, (mkeySalt, mkeyHash) => {
      callback(salt, hash, mkeySalt, mkeyHash);
    });
  });
};

exports.createUser = (password, callback) => {
  scryptPWD(password, (salt, hash) => {
    callback(salt, hash);
  });
};

exports.encryptPatientDB = (doc) => {
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const ciphertext = Buffer.concat([iv, cipher.update(doc), cipher.final()]);
  return ciphertext.toString("base64");
};

exports.decryptPatientDB = (doc) => {
  const ciphertextBytes = Buffer.from(doc, "base64");
  const iv = ciphertextBytes.slice(0, 16);
  const data = ciphertextBytes.slice(16);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const plaintextBytes = Buffer.concat([
    decipher.update(data),
    decipher.final(),
  ]);
  return plaintextBytes.toString();
};
