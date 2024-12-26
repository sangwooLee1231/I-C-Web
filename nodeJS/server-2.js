const express = require("express");
const app = express();
let total = 0

app.get("/",(req,res)=> {
    console.log("첫페이지 get요청 들어왔음.")
    res.status(200);
})

app.post("/go",(req,res) => {
    console.log("인증받지 못해 post요청 응답할 수 없음.");
    res.status(400);
    res.send("No Accept")
})

app.get("/info/:food",(req,res) => {
    res.status(200)
    res.send(`my food is ${req.params.food}`)
    console.log(`my food is ${req.params.food}`)
});

app.get("/sum/:number",(req,res) => {
    res.status(200)
    const num = parseInt(req.params.number);
    total += num
    res.send("----> " + total)
    console.log(total)
})

app.listen(2000,() =>{
    console.log("==== my server port: 2000 ====")
})  