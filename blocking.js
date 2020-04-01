const fs = require("fs");

function blocking() {
  console.log("Before");
  const data = fs.readFileSync("./blocking.txt");
  console.log("After");
  console.log("===============");
  console.log(data.toString());
}

function nonBlocking() {
  console.log("Before");
  const data = fs.readFile("./blocking.txt", function(err, data) {
    console.log("Non-blocking");
    console.log("===============");
    console.log(data.toString());
  });
  console.log("After");
  console.log("**************");
  console.log(data);
}

if (process.env.MODE == "block") {
  blocking();
} else {
  nonBlocking();
}
