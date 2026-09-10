// P1. Predict the output  (commit: "p1: equality predictions")
//
// For each line, write your prediction in the comment BEFORE running.
// Then run:  node p1_predict.js
// Wrong predictions are the point. For every miss, add one line
// explaining why, and commit.

console.log(1, 1 == "1");            // true:
console.log(2, 1 === "1");           // false:
console.log(3, 0 == "");             // true:
console.log(4, 0 === "");            // false:
console.log(5, "" == " ");           // false:
console.log(6, null == undefined);   // true:
console.log(7, null === undefined);  // false:
console.log(8, "4" - true);          // 3:
console.log(9, "4" + 1);             // 41:
console.log(10, "4" * "2");          // 8:
console.log(11, typeof "4");         // string:
console.log(12, typeof null);        // object:
console.log(13, typeof []);          // object:
console.log(14, [1, 2] == [1, 2]);   // false:
console.log(15, NaN === NaN);        // false:
