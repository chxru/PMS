const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.scryptSync("password", "salt", 32);

exports.encrypt = (doc) => {
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const ciphertext = Buffer.concat([iv, cipher.update(doc), cipher.final()]);
  return ciphertext.toString("base64");
};

exports.decrypt = (doc) => {
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
