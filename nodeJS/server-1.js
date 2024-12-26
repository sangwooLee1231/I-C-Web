const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method); //요청, 삭제, 수정
    let method = req.method;
    let url = req.url;

    res.setHeader("Content-Type", "text/plain");
    // res.write("Hello NodeJS");
    // res.end(); //응답 종료
    if (method == 'GET' && url == "/home") {
        res.statusCode = 200;
        res.end("Home Page...>!")
    } else if (method == 'GET' && url == "/about") {
        res.statusCode = 200;
        res.end("About Page...>!")
    } else {
        res.statusCode = 404;
        res.end("File not Found....!")
    }


});

server.listen(3000, () => {
    // 3000번 포트로 서버가 실행되었을 때 처리할 내용
    console.log("3000번 포트에서 서버 실행 중")
});
