//바 에서 odd even 받아옴
const { odd, even } = require("./var");

function checkOddOrEven(num) {
  if (num % 2) {
    return odd;
  } else {
    return even;
  }
}

//checkOddOrEven을 내보낸다
module.exports = checkOddOrEven;
