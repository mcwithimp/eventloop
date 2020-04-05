const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const promisify = require("util").promisify;

const _ = promisify(fs.readFile);
const readFile = fileNum =>
  _(path.resolve(__dirname, `./files/file${fileNum}`));

const scrypt = promisify(crypto.scrypt);

const getRandomNumber = () => Math.floor(Math.random() * 10);

const getRandomPair = () => {
  const a = getRandomNumber();
  let b = getRandomNumber();

  while (a === b) {
    b = getRandomNumber();
  }

  let from = a,
    to = b;
  if (a > b) {
    from = b;
    to = a;
  }
  return { from, to };
};

const CONTENTS = ["8", "3", "6", "4", "7", "0", "9", "2", "1", "5"];

module.exports = {
  readFile,
  scrypt,
  getRandomNumber,
  getRandomPair,
  CONTENTS
};
