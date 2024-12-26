const express = require("express");
const app = express();


app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴")
    res.status(200);
    res.send("Hello Node! express!");
});

app.get("/home", (req, res) => {
    console.log("/home 주소로 GET요청 들어옴")
    res.status(200);
    res.send("Hello Home! express!");
});

//contacts/apple
app.get("/contacts/:id", (req, res) => {
    console.log("/contacts/:id 주소로 GET요청 들어옴")
    let id = req.params.id;
    res.status(200);
    res.send("Your id >> " + id);
});

app.listen(3000,() =>{
    console.log("--------------------------");
    console.log(`3000번 포트에서 서버 실행 중`);
    console.log("--------------------------");
})