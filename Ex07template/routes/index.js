const express = require("express");
const router = express.Router();

//특정 경로 요청 시
//index.html 응답 + 특정 데이터(html 에서 출력되도록)
router.get("/", (req, res) => {
  //render 호출시
  //보내는 값 {} : 넌적스가 처리함
  //index : index.html 을 렌더링 하여 보내겠다!
  res.render("index", { title: "value" }); //title 이란 키로 밸류값 보냄
});

router.get("/hello", (req, res) => {
  res.render("index", { title: "hello" });
});

module.exports = router;
