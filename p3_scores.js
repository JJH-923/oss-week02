// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const odd = scores.filter((n)=>n%2===1);
console.log("odd:",odd);
const doubled = odd.map((n)=>n*2);
console.log("double:", doubled);

const sorted = doubled.sort((a,b)=>b-a);
console.log("sorted:", sorted);

const half = Math.ceil(sorted.length / 2);
const firstHalf = sorted.slice(0,half);
console.log("first half:", firstHalf);

// (b)
const result = scores.filter((s)=> s%2===1).map((s)=>s*2).sort((a,b)=>b-a).slice(0, half);
console.log("chain:", result);

// (c)
console.log("scores again:", scores);