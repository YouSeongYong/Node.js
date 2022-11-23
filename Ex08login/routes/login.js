const express = require("express");
const router = express.Router();

//loginForm.html 렌더링
router.get("/loginForm", (req, res) => {
  //render 호출시
  //보내는 값 {} : 넌적스가 처리함
  //index : index.html 을 렌더링 하여 보내겠다!
  res.render("loginForm"); //title 이란 키로 밸류값 보냄
});

//로그인 처리
router.post("/login", (req, res) => {
  let id = req.body.id;
  let pw = req.body.pw;

  //성공했을시 경로 실패 했을시 경로 와 값을 보내줄 아이디
  if (id === "smhrd" && pw === "12345") {
    res.render("loginSuccess", { id: id });
  } else {
    res.render("loginFail");
  }
});

module.exports = router;
