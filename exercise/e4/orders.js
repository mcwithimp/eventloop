const fs = require("fs");
const path = require("path");

function processResult(result) {
  console.log(result);
}

let result = [];
fs.readFile(path.resolve(__dirname, "fileX"), function(err, data) {
  if (err) {
    throw new Error(err);
  } else {
    result.push(data.toString());
    if (data.toString() === "Hello") {
      fs.readFile(path.resolve(__dirname, "fileY"), function(err, data) {
        if (err) {
          throw new Error(err);
        } else {
          result.push(data.toString());
          processResult(result);
        }
      });
    } else {
      processResult(result);
    }
  }
});
