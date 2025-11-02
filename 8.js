// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const tango = input.split(" "); // 所有單字的陣列  [ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]
  const hitotsu = tango.map((word) => {
    return [...`${word}`];
  });
  //  所有單字拆解的雙重陣列
  // [
  //   [ 'l', 'o', 'r', 'e', 'm' ],
  //   [ 'i', 'p', 's', 'u', 'm' ],
  //   [ 'd', 'o', 'l', 'o', 'r' ],
  //   [ 's', 'i', 't' ],
  //   [ 'a', 'm', 'e', 't' ]
  // ]

  const wordPower = hitotsu.map((alone) => {
    // 因為是雙重陣列 要先用map逐一執行
    const totalPower = alone.reduce((power, eng) => {
      // 逐一使用reduce計算分數
      const num = eng.charCodeAt(0) - 96; // a~z的 Unicode 編碼值為 97 ~ 122  減96來達到 1 ~ 26
      return power + num;
    }, 0);
    return totalPower; // 用reduce計算分數
  });

  const max = Math.max(...wordPower); // 找出陣列中最大值
  const doko = wordPower.indexOf(max); // 找出最大值的index
  return tango[doko]; // 回去tango陣列 用index找出分數最大的單字
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
