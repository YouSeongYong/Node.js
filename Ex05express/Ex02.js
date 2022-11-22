const express = require("express");
const app = express();

//app.set('key',value) 식별할 키 , 값/ 키에 값을 저장하도록 설정
app.set("port", process.env.PORT || 8888);
//기본 포트가 있다면 그 번호로 포트 지정
//그렇지 않으면 8888을 쓰겠다

app.get("/home", (req, res) => {
  //http 모듈 -> html 파일을 응답하기 위해서 필요한 것 ->fs 모듈
  //현재 파일경로 가지고오기
  //응답 헤더 작성하지 않아도 됨
  res.sendFile(__dirname + "/Ex02.html"); //파일 응답
});

//응답 헤더 작성하지 않아도 됨
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버연결 대기중....");
});
