// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
// "abcdef" -> ['ab', 'cd', 'ef']
// "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  const one = [...str]; // 轉成一個個文字的陣列
  let two = []; // 預先準備空陣列
  if (one.length == 0) {
    return one; // 若是空字串 就回傳空陣列
  } else if (one.length % 2 != 0) {
    one.push("_"); // 若是奇數字串 就補"_"
  }

  for (let i = 0; i < one.length - 1; i = i + 2) {
    // 一次抓兩個做字串相加 丟入空陣列
    // 用one.length - 1   避免最後一個元素還執行
    two.push(one[i] + one[i + 1]);
  }
  return two;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
