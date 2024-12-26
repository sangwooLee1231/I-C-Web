// async function process2(a, b) {
//     const result = await new Promise((success) => {
//         let star = "";
//         for (let i = 0; i < b; i++) {
//             star = star + a;
//         }
//         success(star);
//     });
//     console.log(result);
// }
// process2("*", 10);

async function process22(char, num) {
    const [result, char2, num2] = await new Promise((success) => {
      let sum_str = char.repeat(num);
      success(sum_str, char, num);
    });
    console.log(char + "이 " + num + "번 반복하여 " + result + "가 만들어짐.");
  } 
  
  
  process22("*", 10);