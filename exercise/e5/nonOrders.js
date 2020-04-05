const fs = require("fs");
const path = require("path");

function processResult(first, second) {
  // do something
  console.log(first, second);
}

let X, Y;

fs.readFile(path.resolve(__dirname, "fileX"), function(err, data) {
  if (err) throw new Error(err);
  X = data.toString();
  if (Y !== undefined) {
    console.log("X comes later!");
    processResult(Y, X);
  }
});

fs.readFile(path.resolve(__dirname, "fileY"), function(err, data) {
  if (err) throw new Error(err);
  Y = data.toString();
  if (X !== undefined) {
    console.log("Y comes later!");
    processResult(X, Y);
  }
});
