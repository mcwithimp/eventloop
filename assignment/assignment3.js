const crypto = require("crypto");

async function test3(passwords) {
  let answer = "";
  // 사용자의 비밀번호 입력을 받아 이를 암호화 한 결과를 리턴하는 함수를 작성한다.
  // 암호화는 경우에 따라 복잡한 계산이 필요하므로
  // 반드시 비동기적으로 구현됭어야 한다.
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
