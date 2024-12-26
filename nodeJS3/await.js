const fs = require("fs").promises;

async function readDirAsync() {
    // dir 명령어 결과를 files변수에 넣은 후
    // files를 프린트
    const files = await fs.readdir("./");
    console.log(files)
}

// 밑에 실행될 것이 있는 경우..



readDirAsync();