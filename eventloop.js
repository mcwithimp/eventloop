function delay() {
  for (var i = 0; i < 2000000000; ++i);
}

function test1() {
  console.log("test1");
  test2();
}

function test2() {
  let timer = setTimeout(function() {
    console.log("test2");
    setImmediate(function() {
      console.log("test4");
    });
    delay();
    console.log("test6");
  }, 0);
  delay();
  test3();
}

function test3() {
  console.log("test3");
}

test1();
delay();
console.log("test7");
