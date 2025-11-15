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

// function isValidVatNumber(vat) {
//   // 實作寫在這裡
// }

// console.log(isValidVatNumber("10458575")); // true
// console.log(isValidVatNumber("88117125")); // true
// console.log(isValidVatNumber("53212539")); // true
// console.log(isValidVatNumber("88117126")); // false

const gov = [1, 2, 1, 2, 1, 2, 4, 1];
//
const vat = "88117125";
const word = [...vat]; // 轉成一個一個【字串】的陣列
const one = word.map((w) => Number(w)); // 轉成一個一個【數字】的陣列
if (one[6] != 7) {
  let box = [];
  for (let a = 0; a < one.length; a++) {
    box.push(gov[a] * one[a]);
  }
  const noSeven = box.map((n) => {
    if (n >= 10) {
      return numberReducer(n);
    } else {
      return n;
    }
  });

  noSevenPower = noSeven.reduce((a, b) => {
    return a + b;
  });
  if (noSevenPower % 5 == 0) {
    console.log("true");
    // return true;
  } else {
    console.log("false");
    // return false;
  }
}
