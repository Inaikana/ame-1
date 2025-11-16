// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）
// 錨典是#後面的  用來在同的網頁間互相移動

function removeAnchor(url) {
  const hanasu = url.split("#"); // 得到一個以#分離左右兩邊的陣列 包含【#左邊】和【#右邊】 兩個元素
  const kirei = hanasu[0]; // 我要【#左邊】的 所以用[0]
  return kirei;
}

const W = "jfvhdjhfdv_flkjolfd;";
const P = W.split("_");
console.log(P);

// console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
// console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
// console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1
