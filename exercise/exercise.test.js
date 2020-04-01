const { getRandomNumber, getRandomPair, CONTENTS } = require("./utils");
const { test1 } = require("./exercise1.js");
const { test2 } = require("./exercise2.js");

function getAnswer1(from, to) {
  return CONTENTS.slice(from, to + 1).join("");
}

describe("Test1", () => {
  const { from, to } = getRandomPair();
  const answer = getAnswer1(from, to);
  it(`file${from} 부터 file${to} 까지의 내용을 연결해 출력한다`, done => {
    test1(from, to).then(submit => {
      if (submit == answer) {
        done();
      } else {
        throw Error("테스트 실패");
      }
    });
  });
});

function getAnswer2(start) {
  let answer = "";
  let next = start;
  for (var i = 0; i < 5; i++) {
    next = CONTENTS[next];
    answer += next;
  }
  return answer;
}

describe("Test2", () => {
  const start = getRandomNumber();
  const answer = getAnswer2(start);
  it(`file${start} 부터 5개 파일의 내용을 연결해 출력한다`, done => {
    test2(start).then(submit => {
      if (submit == answer) {
        done();
      } else {
        throw Error("테스트 실패");
      }
    });
  });
});
