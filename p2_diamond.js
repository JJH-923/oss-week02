// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);
const mid = Math.floor(n / 2);

for (let i = 0; i < n; i++) {
    let line = "";

    if (i <= mid) {
        for (let j = 0; j < mid - i; j++) {
            line += " ";
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            line += "*";
        }
    } else {
        for (let j = 0; j < i - mid; j++) {
            line += " ";
        }

        for (let j = 0; j < 2 * (n - i) - 1; j++) {
            line += "*";
        }
    }

    console.log(line);
}

// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".
