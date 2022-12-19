//app.js : node module 로딩, 초기화, router 유입점
const express = require("express");
const indexRouter = require("./routes/index"); //require('./routes')< index.js는 생략가능 애가 기본으로 되어있음
const userRouter = require("./routes/user");
const app = express();

app.set("port", process.env.PORT || 8888);

//루트로 요청하면 인덱스라우터로 요청을 보낼거
app.use("/", indexRouter);
// 유저로 요청하면 유저 라우터로 요청 보낼거
app.use("/user", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버연결 대기중....");
});
