//라우터
const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/insert", async (req, res, next) => {
  // id, pw, age 데이터 받기
  // 바디에 오는건 바디파서 써주기
  console.log(req.body);
  let { id, pw, age } = req.body;
  try {
    // id pw age 유저 객체로 받아옴 데이터 삽입시 사용하는 함수
    //  user -> 삽입된 데이터 반환
    const user = await User.create({
      id: id, // 컬럼이름 : 저장되는 실제값
      pw: pw,
      age: age,
    });
    res.json(user); //삽입된 데이터를 그대로 응답
  } catch (err) {
    next(err); //에러 처리 미들웨어
  }
});
router.get("/selectall", async (req, res, next) => {
  try {
    //테이블에 있는 모든거 가져오는거
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});
//아이디로 넘어오는값 식별
router.get("/select/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "age"],
      //하나만 찾으니까 where 이라는 조건 / id컬럼값 조회
      where: { id: req.params.id },
    });

    req.session.login = user;
    res.json(user);
  } catch (err) {
    next(err);
  }
});
//수정 : patch (data:body)
router.patch("/update", async (req, res, next) => {
  try {
    const result = await User.update(
      {
        //수정할 값
        //뭘로 수정할건지 지정
        pw: req.body.pw,
        age: req.body.age,
      },
      {
        // 업데이트 지정
        where: { id: req.session.login.id },
      }
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
});
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const result = await User.destroy({
      where: { id: req.params.id },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
