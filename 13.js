// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function add(n) {
  const one = [...n.toString()]; //
  mix = one.reduce((last, element) => {
    return Number(last) + Number(element);
  });
  return mix;
}

const numberReducer = (num) => {
  let thisRound = add(num); //

  for (let i = 0; thisRound >= 10; i++) {
    thisRound = add(thisRound);
  }
  return thisRound;
};

// import {numberReducer} form ./第12題.js
// 偷第12題的數字累加來用

const gov = [1, 2, 1, 2, 1, 2, 4, 1]; // 把加權分數做成陣列
const yes = [1, 2, 1, 2, 1, 2, 1]; // 移除原第7位的加權陣列

function isValidVatNumber(vat) {
  const word = [...vat]; // 轉成一個一個【字串】的陣列
  const one = word.map((w) => Number(w)); // 轉成一個一個【數字】的陣列
  if (one[6] != 7) {
    // 如果第七位不是7
    let box = [];
    for (let a = 0; a < one.length; a++) {
      box.push(gov[a] * one[a]); // 用空陣列裝相乘之積
    }
    const noSeven = box.map((n) => {
      // 用第12題的函數把數字變成一位數
      if (n >= 10) {
        return numberReducer(n);
      } else {
        return n;
      }
    });

    noSevenPower = noSeven.reduce((a, b) => {
      // 用reduce計算累加值
      return a + b;
    });
    if (noSevenPower % 5 == 0) {
      // 判斷
      return true;
    } else {
      return false;
    }
  } else {
    one.splice(6, 1); // 已知第七位是7  先移除
    let box = [];
    for (let a = 0; a < one.length; a++) {
      box.push(yes[a] * one[a]);
    }
    const isSeven = box.map((n) => {
      if (n >= 10) {
        return numberReducer(n);
      } else {
        return n;
      }
    });

    isSevenPower = isSeven.reduce((a, b) => {
      return a + b;
    });
    //已知第七位必是7 政府加權必是4 依規定結果必是0或1 因此判斷【累加值】或【累加值 + 1】
    if (isSevenPower % 5 == 0 || (isSevenPower + 1) % 5 == 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
