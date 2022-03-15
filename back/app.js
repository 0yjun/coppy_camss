const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const db = require('./models');
const userRouter = require('./routes/user');
const app = express();
/*      [ PART 1 ]
        db설정
*/
console.log(db);
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공!');
  })
  .catch(console.error);
/*      [ PART 2 ]
        express 설정
*/
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("dev"));
dotenv.config();
//front 요청 데이터를 req로 받음
app.use(express.json()); //front json
app.use(express.urlencoded({ extended: true })); //form submit
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "nodebirdsecret",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser(process.env.COOKIE_SECRET));

/*      [ PART 3 ]
        routers 설정
*/
//app.use("/post", postRouter);
//app.use("/posts", postsRouter);
app.get("/", (req, res) => {
  res.send("hello express");
});
app.use("/user", userRouter);

app.listen(4000, () => {
  console.log("4000port run");
});
