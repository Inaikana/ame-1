// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
// 1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

function add(n) {
  // 把數字一個一個加起來的函數
  const one = [...n.toString()]; // 逐一顯示數字的陣列
  mix = one.reduce((last, element) => {
    return Number(last) + Number(element);
  });
  return mix;
}

const numberReducer = (num) => {
  let thisRound = add(num); // 做一次數字一個一個加起來

  if (thisRound >= 10) {
    // 如果結果不是一位數
    thisRound = add(thisRound); //
  }

  return thisRound;
};

// console.log(numberReducer(9527)); // 印出 5
// console.log(numberReducer(1450)); // 印出 1
// console.log(numberReducer(5566108)); // 印出 4
// console.log(numberReducer(1234567890)); // 印出 9
console.log(numberReducer(99999999999));
