const express = require("express");
const path = require("path");

const app = express(); //express할 수 있는 객체 리턴

app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(path.join(__dirname, "views", "home.html"));
});


app.listen(3000, () => {
    console.log("-------------------------");
    console.log("3000번 포트 서버 시작됨.");
    console.log("-------------------------");
});