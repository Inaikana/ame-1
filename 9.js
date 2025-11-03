// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）
// 錨典是#後面的  用來在同的網頁間互相移動

function removeAnchor(url) {
  // 實作寫在這裡
}

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1

//

url.split("#");
