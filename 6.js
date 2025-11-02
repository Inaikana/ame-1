// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    //因為我會拿numbers[i]和numbers[i + 1]相比 所以迴圈跑到 numbers.length - 1 就可以了
    if ((numbers[i] + numbers[i + 1]) / 2 !== numbers[i]) {
      // numbers[i]和numbers[i + 1]相加除2 若不等於numbers[i] 就代表這兩個數不一樣
      if (numbers[i] == numbers[i - 1] || numbers[i] == numbers[i + 2]) {
        // 拿numbers[i]去跟前一個元素或後兩個元素比(用「或」避免i是最左或最右時) 找出numbers[i]、numbers[i+1]哪個才是不一樣的
        return numbers[i + 1];
      } else {
        return numbers[i];
      }
    }
  }
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
