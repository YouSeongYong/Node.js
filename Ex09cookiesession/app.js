const express = require("express");
const app = express();
const cookieRouter = require("./router/cookie");
const cookieParser = require("cookie-parser");

app.set("port", process.env.PORT || 8888);

app.use(cookieParser()); //쿠키값 확인시 필요
app.use("/c", cookieRouter); //c라는 경로로 요청 왔을때 쿠키 라우터를 보여줌

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버연결 대기중....");
});
