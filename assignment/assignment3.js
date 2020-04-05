const crypto = require("crypto");

async function test3(passwords) {
  let answer = "";
  // files 폴더의 각 파일의 내용은 0~9 사이의 숫자 중 하나이다.
  // start 부터 시작하여 5개의 파일의 내용을 순차적으로 연결(string concat)하여
  // answer에 저장한다.
  // 이 때 각 파일의 내용(숫자)은 다음 파일을 가리킨다.
  // 예시. start는 2이고, file2의 내용은 6, file6의 내용은 3인 경우
  // file2 => file6 => file3 순으로 파일을 읽고
  // 그 내용(숫자)을 연결한다.
  // 함수 scrypt의 시그니쳐는 다음과 같다.
  // 주의사항1. 2, 3, 4 파라미터는 그대로 유지할 것
  // crypto.scrypt(password, "salt", 64, { N: 1024 }, function(err, derivedKey) {
  //   // do something
  //  주의사항2. derivedKey에 추가적인 오퍼레이션을 하지 말 것
  // });
  // 여기에 코드를 구현하세요.

  //
  return answer.toString("hex");
}

module.exports = test3;
