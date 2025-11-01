// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  const min = Math.floor(seconds / 60); // 有幾分鐘
  let nokoruSec = seconds % 60; // 剩幾秒(除不盡的)

  let hr = Math.floor(min / 60); // 有幾小時
  let nokoruMin = min % 60; // 剩幾分(除不盡的)

  if (nokoruSec < 10) {
    //設定秒 < 10會用0開頭
    nokoruSec = `0${nokoruSec}`;
  }

  if (nokoruMin < 10) {
    //設定分 < 10會用0開頭
    nokoruMin = `0${nokoruMin}`;
  }

  if (hr < 10) {
    //設定小時 < 10會用0開頭
    hr = `0${hr}`;
  }
  return `${hr}:${nokoruMin}:${nokoruSec}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

// Math.floor() 無條件捨去

// const seconds = 0; // 改這邊測試
// const min = Math.floor(seconds / 60); // 有幾分鐘
// let nokoruSec = seconds % 60; // 剩幾秒

// let hr = Math.floor(min / 60); // 有幾小時
// let nokoruMin = min % 60; // 剩幾分

// if (nokoruSec < 10) {
//   nokoruSec = `0${nokoruSec}`;
// }

// if (nokoruMin < 10) {
//   nokoruMin = `0${nokoruMin}`;
// }

// if (hr < 10) {
//   hr = `0${hr}`;
// }
// console.log(`${hr}:${nokoruMin}:${nokoruSec}`);
