const lottoSync = document.querySelector("#buyLottoSync");
lottoSync.addEventListener("click", getLottoSync);
const lottoAsync = document.querySelector("#buyLottoAsync");
lottoAsync.addEventListener("click", getLottoAsync);

const DELAY = 2500; // 2.5초
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function getNums() {
  const lottoNum = document.querySelector("#lottoNumSync");
  sleep(DELAY);
  console.log("1");
  lottoNum.innerHTML = "1 3 22 23 38 42";
}

function getBonusNum() {
  const bonusNum = document.querySelector("#bonusNumSync");
  sleep(DELAY);
  console.log("2");
  bonusNum.innerHTML = "7";
}

function getLottoSync() {
  const lottoNum = document.querySelector("#lottoNumSync");
  sleep(DELAY);
  console.log("1");
  lottoNum.innerHTML = "1 3 22 23 38 42";

  const bonusNum = document.querySelector("#bonusNumSync");
  sleep(DELAY);
  console.log("2");
  //   bonusNum.innerHTML = "7";
}

function asyncCall(DELAY) {
  return new Promise(resolve =>
    setTimeout(function() {
      const lottoNum = document.querySelector("#lottoNumAsync");
      lottoNum.innerHTML = "1 3 22 23 38 42";
      resolve();
    }, DELAY)
  );
}

async function getLottoAsync() {
  await new Promise(resolve =>
    setTimeout(function() {
      const lottoNum = document.querySelector("#lottoNumAsync");
      lottoNum.innerHTML = "1 3 22 23 38 42";
      resolve();
    }, DELAY)
  );

  await new Promise(resolve =>
    setTimeout(function() {
      const bonusNum = document.querySelector("#bonusNumAsync");
      bonusNum.innerHTML = "7";
      resolve();
    }, DELAY)
  );
}
