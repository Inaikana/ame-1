// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];
let arr = [false, 1, 0, -1, 2, 0, 1, 3, "a", 0, 5];

// function moveZerosToEnd(arr) {
//   // 程式碼寫在這裡
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

let ikutsu = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    arr.splice(i, 1);
    ikutsu++;
  }
}

for (let j = 1; j < ikutsu; j++) {
  arr.push(0);
}

console.log(arr);
