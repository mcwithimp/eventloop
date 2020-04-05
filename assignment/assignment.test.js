const { scrypt, getRandomNumber, getRandomPair, CONTENTS } = require("./utils");
const test1 = require("./assignment1.js");
const test2 = require("./assignment2.js");
const test3 = require("./assignment3.js");

function getAnswer1(from, to) {
  return CONTENTS.slice(from, to + 1).join("");
}

describe("Test1", () => {
  const { from, to } = getRandomPair();
  const answer = getAnswer1(from, to);
  it(`file${from} 부터 file${to} 까지의 내용을 연결해 출력한다`, done => {
    test1(from, to).then(submit => {
      console.log("Submit: ", submit);
      console.log("Answer: ", answer);
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
      console.log("Submit: ", submit);
      console.log("Answer: ", answer);
      if (submit == answer) {
        done();
      } else {
        throw Error("테스트 실패");
      }
    });
  });
});

async function getAnswer3(password) {
  const answer = await scrypt(password, "salt", 64, { N: 1024 });
  return answer.toString("hex");
}

describe("Test3", () => {
  const password = "text for test!";
  it(`비동기 scrypt 함수의 결과를 리턴한다.`, done => {
    Promise.all([test3(password), getAnswer3(password)]).then(
      ([submit, answer]) => {
        console.log("Submit: ", submit);
        console.log("Answer: ", answer);
        if (submit == answer) {
          done();
        } else {
          throw Error("테스트 실패");
        }
      }
    );
  });
});
