// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(min, max) {
  if (max == undefined) {
    // 當使用者只輸入一個變數時
    const ranf = Math.random() * min;
    const ran = Math.floor(ranf);
    return ran;
  } else {
    const ranf = Math.random() * (max - min) + min;
    const ran = Math.floor(ranf);
    return ran;
  }
}

//  Math.random()  現成JS方法 能隨機輸出一個介於 0.0 到 0.999... 之間的數字
//  因此   0 <=  Math.random()  < 1     範圍為1
//  min ~ max 的範圍為 max - min
//  把原式依( max - min ) 作為倍率放大 使它的範圍從 1 變成 ( max - min )
//  因此   0 <= Math.random() * ( max - min ) < 1 * ( max - min )
//  目前範圍的比例拉的一樣大了 但是起點從 0 開始  因此需要讓起點是從 min 開始
//  因此   0 + min <= Math.random() * ( max - min ) + min <  ( max - min ) + min
//  得到  Math.random() * ( max - min ) + min 會落在 min ~ max (不會=max)
//  但它是小數 因為題目是取 < max
//  所以用 Math.floor()取向下 來去除小數

//  當使用者只輸入一個變數時公式時  先輸入的min 就該做為max使用 而min用0
//  因此原式變成   Math.random() * ( min - 0 ) + 0
//  = Math.random() *  min

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
