const a = Math.floor(Math.random() * 100 + 1)

async function process3(a) {
    const result = await new Promise((success) => {
        success(a+100);
    })
    console.log(result);
}


process3(a)

