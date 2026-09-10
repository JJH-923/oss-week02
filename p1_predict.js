// P1. Predict the output  (commit: "p1: equality predictions")
//
// For each line, write your prediction in the comment BEFORE running.
// Then run:  node p1_predict.js
// Wrong predictions are the point. For every miss, add one line
// explaining why, and commit.

console.log(1, 1 == "1");            // prediction:
console.log(2, 1 === "1");           // prediction:
console.log(3, 0 == "");             // prediction:
console.log(4, 0 === "");            // prediction:
console.log(5, "" == " ");           // prediction:
console.log(6, null == undefined);   // prediction:
console.log(7, null === undefined);  // prediction:
console.log(8, "4" - true);          // prediction:
console.log(9, "4" + 1);             // prediction:
console.log(10, "4" * "2");          // prediction:
console.log(11, typeof "4");         // prediction:
console.log(12, typeof null);        // prediction:
console.log(13, typeof []);          // prediction:
console.log(14, [1, 2] == [1, 2]);   // prediction:
console.log(15, NaN === NaN);        // prediction:
