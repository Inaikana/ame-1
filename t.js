const callStack = [5, 456, 123, 555];
const takeout = 123;

// for (let i = 0; i < callStack.length; i++) {
//   if (callStack[i] == takeout) {
//     callStack.splice(i, 1);
//     break;
//   }
// }
callStack.splice(0, 1);

console.log(callStack);
