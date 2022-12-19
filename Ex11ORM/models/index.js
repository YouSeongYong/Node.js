const Sequelize = require("sequelize");
const User = require("./user");
const env = "development";
const config = require("../config/config")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {}; //sequelize, object;
//key 값        //value(db정보)
db.sequelize = sequelize;

db.User = User; //db와 테이블 연결

//db에 생성된 정보
User.init(sequelize); //테이블 초기화
//db에 관련된 정보들
User.associate(db); //관계설정

module.exports = db;
