const DELAY = 2500;
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function test1() {
  console.log("test1");
  test2();
}

function test2() {
  let timer = setTimeout(function cb1() {
    console.log("test2");
    setTimeout(function cb2() {
      console.log("test4");
    }, 0);
    console.log("test6");
  }, 0);

  test3();
}

function test3() {
  console.log("test3");
}

test1();
// sleep(DELAY);
console.log("test7");
