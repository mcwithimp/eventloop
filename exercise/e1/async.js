function synchronous() {
  console.log("1");
  console.log("2");
  console.log("3");
}

function aSynchronous() {
  console.log("1");
  setTimeout(
    function cb() {
      console.log("2");
    },

    1000
  );
  console.log("3");
}

if (process.env.MODE == "sync") {
  synchronous();
} else {
  aSynchronous();
}
