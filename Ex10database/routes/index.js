const express = require("express");
const router = express.Router();
const db_config = require("../config/database");

let conn = db_config.init(); //얘를 실행하면 DB랑 연결할 수 있는 conn을 가질 수 있음
db_config.connect(conn); //위에서 가진 conn을 넣어서 보내기!

router.get("/select", (req, res) => {
  let sql = "select * from member";

  conn.query(sql, function (err, rows, fields) {
    console.log(rows);
    console.log(fields);
    if (err) {
      console.error("select 실행 실패: " + err);
    } else {
      res.render("index", { list: rows });
    }
  });
});

//회원추가
router.post("/insert", (req, res) => {
  //{form태그 안에 있는 name 값과 똑같이 써주면 됨}
  let { id, pw, nick } = req.body;

  //sql문
  //바뀌는 값은 ?로 쓰기
  let sql = "insert into member values(?,?,?)";

  // conn.query(실행할 sql문, [물음표 값에 들어갈 데이터 적어주기(순서대로)],sql실행하고 난 후에 결과 처리 어떻게 할 건지);//sql 작동
  conn.query(sql, [id, pw, nick], function (err, rows, fields) {
    console.log(rows); //영향을 받은 row에 대한 정보
    console.log(fields); //row에 대한 자세한 메타데이터

    if (err) {
      //실패
      console.error("insert 실패💦: " + err);
    } else {
      //성공
      res.redirect("/select"); //select 페이지로 이동
    }
    res.send("insert 완료");
  }); //sql 작동
});

//특정회원 정보 조회

router.get("/select/:id", (req, res) => {
  let id = req.params.id;

  let sql = "select * from member where id=?";
  conn.query(sql, [id], function (err, rows, fields) {
    console.log(rows);
    console.log(fields);

    if (err) {
      console.error("select 실행 실패" + err);
    } else {
      res.json({ listone: rows });
    }
  });
});

//회원삭제

router.get("/delete/:id", (req, res) => {
  let id = req.params.id;

  let sql = "delete from member where id=?";
  conn.query(sql, [id], function (err, rows, fields) {
    if (err) {
      console.error("delete 실행 실패" + err);
    } else {
      res.redirect("/select");
    }
  });
});

//회원정보수정
router.post("/update", (req, res) => {
  let { id, pw, nick } = req.body;

  let sql = "update member set pw=?,nick=? where id=? ";
  conn.query(sql, [pw, nick, id], function (err, rows, fields) {
    if (err) {
      console.error("update 실행 실패" + err);
    } else {
      res.redirect("/select");
    }
  });
});
module.exports = router;
