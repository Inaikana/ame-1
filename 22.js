// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

class Queue {
  constructor() {
    this.callStack = []; // 建立一個空陣列
    this.length = this.callStack.length; // 建立 length 仿陣列 能查看長度
    this.takeout = 0;
  }
  enqueue(goin) {
    if (goin) {
      this.callStack.push(goin);
      this.length = this.callStack.length;
    }
  }
  dequeue() {
    this.takeout = this.callStack[0];
    this.callStack.splice(0, 1);
    this.length = this.callStack.length;
    return this.takeout;
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
