// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

class Queue {
  constructor() {
    this.callStack = []; // 建立一個空陣列
    this.length = this.callStack.length; // 建立 length 仿陣列 能查看長度
  }
  enqueue(goin) {
    // 製作push功能 把輸入的值依序放入陣列
    if (goin) {
      // 有東西才放
      this.callStack.push(goin);
      this.length = this.callStack.length; // 放完要即時更新陣列長度
    }
  }
  dequeue() {
    const takeout = this.callStack[0];
    // 先記錄這次丟了什麼
    // 如果用return this.callStack[0] 會回傳【丟完後的】
    // 且 return 一定要放最後
    this.callStack.splice(0, 1); // 清除陣列第一個元素
    this.length = this.callStack.length; // 丟完要即時更新陣列長度
    return takeout; // 回傳這次丟了什麼
  }
}

const queue = new Queue();

queue.enqueue(123);
queue.enqueue(456);
queue.enqueue();
console.log(queue.length); // 印出 2

const item = queue.dequeue(); // 取出元素
console.log(item); // 印出 123

queue.dequeue(); // 繼續取出元素
console.log(queue.length); // 印出 0
