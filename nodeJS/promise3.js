// var p = new Promise((resolve, reject) => {
//     const a =  Math.round(Math.random()*100)
//     const b =  Math.round(Math.random()*100) 

//     resolve({a,b});
// });

// p.then((data) => { 
//     console.log("두 수의 합은: " + (data.a+data.b));
//     return (data.a*data.b);
// })
// .then((data) => {
//     console.log("두 수의 곱은: " +data)
// })
// .catch()


const p = new Promise((success, fail) => {
    console.log("Promise를 시작합니다.");
    let n1 = Math.floor(Math.random() * 10 + 1);
    let n2 = Math.floor(Math.random() * 10 + 1);
    let arr = [n1,n2];
    if(n1 < 0 || n2<0) {
        fail("음수값이 나와서 실패");    //catch
    }
    success(arr);   //then
});

p.then((array) => {
    let sum = array[0]+ array[1];
    console.log("두 수의 합: " + sum);
    array.push(sum);
    return array;
})
.then((array2) => {
    let mul = array2[0]*array2[1];
    console.log("두 수의 곱: " + mul);
    let result = [array2[2],mul];
    return result;
})
.then((array3) => {
    console.log("두 수의 합: " + array3[0])
    console.log("두 수의 곱: " + array3[1])
}) 
.catch(() => {
    
})
