const fs = require("fs").promises;
//fs 모듈을 promise형식으로 바꿔서 사용 (비동기방식)

fs.readFile("./readme.txt")
  .then((data) => {
    //buffer 기본 제공
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
