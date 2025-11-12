// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  const moji = num.toString(); // 把數字轉成文字
  const ikutsu = moji.length; // 這串數字有幾個字 = 它是幾位數
  const hitotsu = [...moji]; // 逐一顯示數字的陣列
  let tensArr = []; // 用來降冪裝10的次方
  let match = ""; // 用來裝最後結果

  // 用迴圈 根據該數字的最大位數 把10的次用降冪裝進tensArr
  // ikutsu = 幾位數 = 幾個數字
  // 10000是五位數 但後面是4個0 所以要-1
  for (let j = ikutsu - 1; j >= 0; j--) {
    tensArr.push(Math.pow(10, j));
  }

  //現在數字陣列跟10的次方的陣列 各個元素的位置對齊了 用迴圈組裝
  for (let k = 0; k < ikutsu; k++) {
    if (hitotsu[k] == 0) {
      // 如果那個位數是0 就不用印 跳過這圈
      continue;
    } else if (tensArr[k] == 1) {
      match = `${match} + ${hitotsu[k]}`;
      // 不用印10的0次方的1
    } else {
      match = `${match} + ${tensArr[k]} x ${hitotsu[k]}`;
    }
  }

  return match.slice(3);
  // 最初 match 是空字串 所以最前面會是【(空格)+(空格)】共3個字元  因此要用 .slice() 去除
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8
