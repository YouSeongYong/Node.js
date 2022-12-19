const express = require("express");
const app = express();
const cookieRouter = require("./routes/cookie");
const sessionRouter = require("./routes/session");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
//npm install express-session 설치

app.set("port", process.env.PORT || 8888);
app.use(cookieParser()); //쿠키값 확인시 필요
app.use(
  session({
    httpOnly: true, // http 요청으로 온것만 처리
    resave: false, //세션을 언제나 저장할지 설정
    secret: "secret key", // 암호화 하는데 쓰일 키
    store: new fileStore(), //여러 사용자의 세션을 저장하기 위한 저장소
  })
);
app.use("/c", cookieRouter); //c라는 경로로 요청 왔을때 쿠키 라우터를 보여줌
app.use("/s", sessionRouter); // /s 라는 경로로 요청 왔을때 세션 라우터를 보여주
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버연결 대기중....");
});
