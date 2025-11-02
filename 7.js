// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    // 因為我會拿numbers[i]和numbers[i + 1]相比 所以迴圈跑到 numbers.length - 1 就可以了
    if ((numbers[i] + numbers[i + 1]) % 2 == 1) {
      // 無論奇偶 如果numbers[i] + numbers[i + 1]是奇數 代表其中一個不合群
      if (
        numbers[i] % 2 == numbers[i - 1] % 2 || // 拿numbers[i]去跟前一個元素或後兩個元素比(用「或」避免i是最左或最右時) 找出numbers[i]、numbers[i+1]哪個才是不一樣的
        numbers[i] % 2 == numbers[i + 2] % 2
      ) {
        return numbers[i + 1];
      } else {
        return numbers[i];
      }
    }
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160
