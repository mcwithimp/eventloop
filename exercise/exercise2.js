const { readFile, getRandomNumber, CONTENTS } = require("./utils");

const start = getRandomNumber();

async function test2(start) {
  let answer = "";
  // files 폴더의 각 파일의 내용은 0~9 사이의 숫자 중 하나이다.
  // start 부터 시작하여 5개의 파일의 내용을 순차적으로 연결(string concat)하여
  // answer에 저장한다.
  // 이 때 각 파일의 내용(숫자)은 다음 파일을 가리킨다.
  // 예시. start는 2이고, file2의 내용은 6, file6의 내용은 3인 경우
  // file2 => file6 => file3 순으로 파일을 읽고
  // 그 내용(숫자)을 연결한다.

  let next = start;
  for (var i = 0; i < 5; i++) {
    next = await readFile(next);
    answer += next;
  }
  return answer;
}

module.exports = {
  test2
};
