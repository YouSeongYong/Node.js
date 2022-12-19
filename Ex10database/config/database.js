const mysql = require("mysql2");

const db_info = {
  host: "localhost",
  port: "3306",
  user: "test",
  password: "1234",
  database: "testdb",
};

module.exports = {
  init: function () {
    //db_info 를 담아서 넘겨준다
    return mysql.createConnection(db_info);
  },
  //초기화를 하고 난다음 커넥트를 호출하면서 conn 을 넣어줌
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) {
        console.log("mysql 연결 오류 : " + err);
      } else {
        console.log("mysql 연결 성공!");
      }
    });
  },
};
