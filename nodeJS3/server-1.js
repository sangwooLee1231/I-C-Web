const http = require("http");

const server = http.createServer((req, res) => {
    const {method, url} = req;
    res.setHeader("Content-Type","text/plain");
    const readStream = fstat.createReadStream(__dirname + "/index.html","utf8");
    readStream.pipe(res);

    if (method == 'GET' && url == "/home") {
        res.statusCode = 200;
        res.end("HOME")
    } else if (method == 'GET' && url == "/about") {
        res.statusCode = 200;
        res.end("ABOUT")
    } else {
        res.statusCode = 404;
        res.end("Not Found")
    }


});

server.listen(3000, () => {
    // 3000번 포트로 서버가 실행되었을 때 처리할 내용
    console.log("3000번 포트에서 서버 실행 중")
});
