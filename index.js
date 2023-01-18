const express = require("express");
const path = require("path");
// path는 노드 안에 자동으로 들어가 있는 내장 모듈로서 따로 설치 안해도 된다. 다만,

const app = express();
app.get("/", function (req, res) {
  res.send(`안녕하세요 <a href="/login">로그인</a>`);
});

app.get("/login", function (req, res) {
  //   res.send(
  //     `<form method="get" action="loginOK">
  //         <input type="text" name="userID">
  //         <input type="password" name="userPW">
  //         <button>로그인</button>
  //         </form> <br>
  //         아이디는 aaa, 비밀번호는 1234입니다.`
  //   );
  res.sendFile(path.join(__dirname, "login.html"));
});
app.get("/loginOK", function (req, res) {
  const id = req.query.userID;
  const pw = req.query.userPW;
  const gender = req.query.gender;
  let _gender;
  if (gender === "male") {
    _gender = "Mr. ";
  } else {
    _gender = "Ms. ";
  }
  if (id === "aaa" && pw === "1234") {
    res.send(`${_gender}John Doe님 로그인이 되셨습니다`);
  } else {
    res.send("아이디와 비밀번호를 다시 한번 확인해주세요.");
  }
});

app.listen(9999, function () {
  console.log("9999번에서 서버 대기중");
});

// // 모듈 방식
// const express = require("express");
// const app = express();
// app.get("/", function (req, res) {
//   res.send("hello express");
// });
// app.get("/hello", function (req, res) {
//   res.send("안녕하세요. express입니다.");
// });
// app.get("/introduce", function (req, res) {
//   console.log(req.query.name);
//   console.log(req.query.age);
//   if (req.query.age > 20) {
//     res.send(
//       "<h1>안녕하세요. 잘생긴 " +
//         req.query.name +
//         "님 당신은 미성년자가 아니므로 입장 가능합니다.</h1>"
//     );
//   } else {
//     res.send("<h1>안녕하세요. 잘생긴 " + req.query.name + "님 꺼져....</h1>");
//   }
// });
// app.get("/weather", function (req, res) {
//   if (req.query.region === "서울") {
//     res.send("<h1>맑음</h1>");
//   } else if (req.query.region === "춘천") {
//     res.send("<h1>폭설이라서 안가는게 좋음...</h1>");
//   }
// });

// app.listen(3000, function () {
//   console.log("3000번 포트로 들어오는 명령을 들을 수 있어요");
// });
