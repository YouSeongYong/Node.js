const express = require("express");
const nunjucks = require("nunjucks"); //넌적스 템플릿 엔진 사용
const loginRouter = require("./routes/login");
const bodyParser = require("body-parser");
const app = express();

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html"); //넌적스 =njk / html 쓰면됨

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", loginRouter);

//npm install nunjucks
//npm install nunjucks chokidar

//loginForm 과 일치 해야함
nunjucks.configure("views", {
  express: app, //app 객체 연결
  watch: true, //html 파일이 연결되면 템플릿 엔진을 다시 렌더링
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버연결 대기중....");
});
