// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
// [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3 次

function findOddElm(numbers) {
  const word = numbers.map((n) => n.toString()); // 把陣列內容變成全部都是文字
  const count = word.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;
    return obj;
  }, {});

  // 物件無法用for of
  for (const num in count) {
    // 對每個count物件裡的key掃描
    if (count[num] % 2 != 0) {
      // 若key的值是奇數 就回傳key
      return num;
    }
  }
}

// 【count】為跟AI許的高級願望
//  對word使用reduce  初始值為空物件
//  <第一輪>
//  把 word[0] 作為這個空物件的key (所以我才要先把numbers陣列轉成文字)
//  用判斷式 obj[key] = (obj[key] || 0) + 1  來決定賦予key什麼值
//  因為是第一輪obj[key]為 undefinde    JS中 undefinde || 0  會取 0
//  因此 obj[key] = 0 + 1  賦予這個key值為1 代表它出現1次
//  每輪結束都把現在obj裡面有什麼key 記錄幾次 都回傳更新
//  <第二輪>
//  case 1 : ( word[0] == word[1])
//  剛剛已賦予 obj[key] = 1
//  判斷式 obj[key] = (obj[key] || 0) + 1  會變成 (1 || 0) + 1
//  JS中 任何非零數字 || 0  會取 非零數字
//  因此 obj[key] = 1 + 1  達到記錄這個key的次數 的功能
//  case 2 : ( word[0] != word[1])
//  因為是obj[word[1]]為 undefinde  同上用判斷式賦予它初始值1
//  同時於這個物件建立另一個key為word[1]
//  如此來分類統計陣列中的元素

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5
