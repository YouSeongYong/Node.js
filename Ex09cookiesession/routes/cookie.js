const express = require("express");
const router = express.Router();

//쿠키 설정하기 저장은 클라이언트
router.get("/setcookie", (req, res) => {
  let nickname = "pingu";

  res.cookie("nickname", nickname, {
    maxAge: 10000000, // 밀리초단위 (만료시간)
  });

  res.cookie("dinner", "치킨", {
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 2),
  });

  res.send("쿠키 생성");
});

//쿠키 확인하기
router.get("/getcookies", (req, res) => {
  console.log(req.cookies); //dinner만확인하고 싶으면 cookies.dinner
  res.send(req.cookies);
});

//쿠키 삭제
router.get("/deletecookie", (req, res) => {
  res.clearCookie("dinner");
  res.send("쿠키삭제");
});
module.exports = router;
