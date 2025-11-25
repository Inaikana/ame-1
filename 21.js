// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    this.callStack = []; // 建立一個空陣列
    this.size = 0; // 建立size 用來查陣列長度
  }
  push(ele) {
    if (ele) {
      // 有輸入值才做
      this.callStack.push(ele); // 把輸入值丟入陣列
      this.size = this.callStack.length; // 加完要即時更新陣列長度
    }
  }
  pop() {
    const rm = this.callStack[this.callStack.length - 1]; // 用rm紀錄丟了什麼
    this.callStack.splice(-1, 1); // 移除陣列最後一個
    this.size = this.callStack.length; // 丟完要即時更新陣列長度
    return rm; // 回傳丟了什麼
  }
}

const stack = new Stack();
stack.push(123);
stack.push(456);
stack.push();
console.log(stack.size); // 印出 2

const item = stack.pop(); // 取出元素
console.log(item); // 印出 456

stack.pop(); // 繼續取出元素
console.log(stack.size); // 印出 0
