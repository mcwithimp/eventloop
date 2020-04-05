const promisify = require("util").promisify;
const fs = require("fs");
const readFileAsync = promisify(fs.readFile);

function test1() {
  fs.readFile("file", function(err, data) {
    if (err) {
      console.log(data);
      throw new Error(err);
    }
    console.log(data.toString());
  });
}

async function test2() {
  let data;
  try {
    data = await fs.readFile("file", function(err, data) {
      if (err) throw new Error(err);
      return data;
    });
    console.log(data.toString());
  } catch (error) {
    console.log(data);
    throw new Error(err);
  }
}

async function test3() {
  let data;
  try {
    data = await readFileAsync("file");
    console.log(data.toString());
    return data;
  } catch (error) {
    console.log(data);
    throw new Error(err);
  }
}

async function test4() {
  const data = await readFileAsync("file");
  return data;
}

test2();
