const { text } = require('express');
const {Client}=require('pg');

const client = new Client({
    user: "picture_gardener",
    host: "localhost",
    database: "pictureweb",
    password: "gardener17",
    port: 5192,
});

client.connect();
// //현재 시간 불러오기
// client.query("SELECT NOW()", (err, res) => {
//     console.log(err, res);
//     client.end();
// })

// //데이터 등록하는 방법
// const query = {
//     text: "INSERT INTO sign_up VALUES($1, $2, $3, $4),($5,$6,$7,$8)",
//     values: 
//     ["safety", "radeon410", "노트북충전기", "gardener's email", 
//     "second", "mongblan7932", "몽블랑", "second@navar.com"],
// };

// //데이터 조회하는 방법
// const query = {
//     text: "SELECT * FROM sign_up",
// }

// //데이터 삭제하는 방법
// const query = {
//     text: "DELETE FROM sign_up WHERE id = $1",
//     values: ["safety"],
// };

//데이터 업데이트 하는 방법
const query = {
    text: "UPDATE sign_up SET id=$1, password=$2, username=$3, email=$4 WHERE id=$5",
    values: ["garden_test", "alphatester5839", "gardener_T", "updatecomplete@gmail.com", "safety"],
};

client
.query(query)
.then((res)=>{
    console.log(res);
    client.end();
})
.catch((e)=>console.error(e.stack));