const express = require("express");
const { nextTick } = require("process");
const app = express();

app.set("port", process.env.PORT || 8888);

app.get("/", (req, res) => {
  res.send("Hello node!");
  next(); //다음 미들웨어로 넘어가도록 제어
});

//미들웨어 : 요청 응답 사이에 무언가를 처리해주는 함수
const myLog = function (req, res) {
  console.log("LOGGED");
};

app.use(myLog); //만든 미들웨어 app 붙여주기

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버연결 대기중....");
});
