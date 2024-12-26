function delay(num,time) {
    return new Promise((success) => {

        setTimeout(() => success(num*2),time);
    });
};

async function processDelay() {
    const result = await delay(5,1000);
    console.log(result);
}

processDelay();