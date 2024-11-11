// const express = require('express') //모듈 불러오기
// const path = require('path')
// var cors = require('cors') //모듈 불러오기
// const app = express()
// const port = 5102 //로컬호스트(컴)의 포트 번호

// const pool = new Pool({
//     user: "Web_test_DB",
//     host: ""
//   })

// app.use(cors()) //cors 모듈을쓰겠다는 의미로, 여러 조건 설정이 가능함.
// app.use(express.static(path.join(__dirname, '../web_system')))

// //get은 http메소드, /은 라우팅(라우팅에 따라 보이는 페이지가 달라짐, youtube.com/channel/~~~~~~이런식으로 있는게 라우팅), (~~) =>{}는 콜백 함수
// app.get('/', (req, res) => { //req와 res에 정보를 담아 보낼 수 있음. req는 파라미터같은거 사용
//     res.redirect('/main')
// })

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../web_system/public/index.html'))
// })

// //포트에 대해서 듣고있다(입력 감지느낌)라는 의미
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)//이 console.log는 기능적인 것에선 별 효력이 없음.
// })




//연습용 스크립트임
const express = require('express')
const app = express()
const port = 5103 // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extend: false}));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("안녕");
});
app.post("/text", (req, res) => {
  const text1 = req.body.inText;
  console.log(text1);
  const sendText = {
    text: "전송 성공",
  };
  res.send(sendText);
});

app.listen(port, () => {
  console.log(`예시 앱이 http://localhost:${port}에서 실행중입니다.`);
});