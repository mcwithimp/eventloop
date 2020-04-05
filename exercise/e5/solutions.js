const fs = require("fs");
const path = require("path");
const promisify = require("util").promisify;

function myReadFile(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
}

let result = [];
const filePathX = path.resolve(__dirname, "fileX");
const filePathY = path.resolve(__dirname, "fileY");
// myReadFile(filePathX)
//   .then(function(data) {
//     result.push(data);
//     return myReadFile(filePathY);
//   })
//   .then(function(data) {
//     result.push(data);
//     // result = [ 'Hello', 'World' ]
//     console.log(result.join(" "));
//     return;
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// Promise.all([
//   myReadFile(filePathX),
//   myReadFile(filePathY)
// ])
//   .then(function(data) {
//     // data = [ 'Hello', 'World' ]
//     console.log(data.join(" "));
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// async function myReadFiles() {
//   const myReadFile2 = promisify(fs.readFile);
//   const X = await myReadFile2(filePathX);
//   const Y = await myReadFile2(filePathY);
//   console.log("They waited!");
//   console.log(X.toString(), Y.toString());
//   console.log("Clean way");
// }

// myReadFiles();
