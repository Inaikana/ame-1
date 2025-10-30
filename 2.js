// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  let eigohenko = []; //預先準備空陣列 用來裝之後缺少的英文字母
  let N = chars.map((eng) => {
    // 把一個個英文字母轉成一個個 Unicode 編碼值的陣列
    return eng.charCodeAt(0);
  });

  for (let i = 0; i < N.length; i++) {
    if (i + 1 < N.length && N[i + 1] !== N[i] + 1) {
      // i + 1 < N.length  用於防止取到陣列最後一個元素
      // N[i + 1] !== N[i] + 1  如果陣列的下一個值 不等於 現在的值+1 的話 => 不連續的話
      N.splice(i + 1, 0, N[i] + 1); // 對下一個位置 塞入前一個數字+1 的元素 使它們便連續
      let eigo = String.fromCharCode(N[i] + 1); // 把Unicode 編碼值改回英文字母
      // 這行用 console.log(eigo); 的話會很接近答案 因為這樣console.log(這個函數)就會變成undefined 在最底下
      // 用 return的話 印一個就停了
      eigohenko.push(eigo); // 所以我只好把每個轉回來、少的英文字母存到這個陣列裡
    }
  }
  return eigohenko.join(); // 再用join()炸開
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P
