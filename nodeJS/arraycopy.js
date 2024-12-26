// let arr1 = [1,2];
// let arr2 = arr1;
// arr1[0] = 2;
// console.log(arr2)
// console.log(arr1)

// 깊은 복사
let arr3=[1,2];
let arr4=[...arr3,3];
arr3[0] = 5;
console.log(arr3);
console.log(arr4);