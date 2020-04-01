const { readFile, getRandomPair, CONTENTS } = require("./utils");

const { from, to } = getRandomPair();

async function test1(from, to) {
  let answer = "";
  // files 폴더 내의 피일 중
  // from 부터 to의 파일 내용을 연결(string concat)하여
  // answer에 저장한다.
  // 예시. from = 2, to = 5 인 경우
  // => file2, file3, file4, file5의 내용을 연결
  for (var i = from; i <= to; i++) {
    // const content = await readFile(i);
    const content = await readFile(i);
    answer = answer + content;
  }
  return answer;
}

console.log(test1(1, 3));

module.exports = {
  test1
};
