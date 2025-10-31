// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];
// function moveZerosToEnd(arr) {
//   let ikutsu = 0; // 記錄有幾個0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       // 【陷阱】要用=== 不然 0 == false
//       arr.splice(i, 1); // 每當陣列元素是0時 去除它
//       ikutsu++; // 0的數量+1
//     }
//   }
//   for (let j = 1; j <= ikutsu; j++) {
//     // 依照 ikutsu 記錄 用迴圈把0 push回陣列最後面
//     arr.push(0);
//   }
//   return arr; // splice push 都會直接更改陣列 把作用完的陣列回傳
// }
// let result = moveZerosToEnd(list);
// console.log(result);

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];
function moveZerosToEnd(arr) {
  // aru = 過濾出的都是0的陣列
  let aru = arr.filter((num) => {
    return num === 0;
  });
  // nai = 過濾出都「不」是0的陣列
  let nai = arr.filter((num) => {
    return num !== 0;
  });
  return nai.concat(aru); //合併 有0的在後面
}
let result = moveZerosToEnd(list);
console.log(result);
