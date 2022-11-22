//var 짝수 홀수 가지고옴
const { odd, even } = require("./var");
//펑션에서 조건문 받아서 옴
const checkOddOrEven = require("./func");

function checkStringOddEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

//내보낼때 밑에처럼
module.exports = checkStringOddEven;
console.log(checkOddOrEven(2));
console.log(checkStringOddEven("h"));
