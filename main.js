// P5. Korean-typo fixer CLI  (commit: "p5: inko cli")
//
// "dhvms thtm" was typed with the keyboard in English mode.
// Turn it back into "오픈 소스" using the inko package from npm.
//
// Steps
//   1. In the repo root:  npm install inko
//   2. Import it at the top of this file and create an instance.
//   3. Fill in the "close" handler below.
//
// Usage
//   node main.js            English keys -> Korean   (inko.en2ko)
//   node main.js --reverse  Korean -> English keys   (inko.ko2en)
//
// You will need: filter, map, forEach, if / else, and en2ko / ko2en from inko.
// Package docs: https://www.npmjs.com/package/inko
//
// When it works, check three things:
//   package.json has "inko" under dependencies
//   node_modules/inko exists
//   git status does NOT show node_modules
//
// The readline part is given. Do not change it. We come back to it in week 3 (async).
//   rl.on("line", f)   runs f every time you press Enter, with the line you typed
//   rl.on("close", f)  runs f once, after you type q (which calls rl.close())
// So: collect lines in the "line" handler, do the work in the "close" handler.

import readline from "node:readline";

// TODO: import Inko from "inko" and create an instance

const reverse = process.argv.includes("--reverse");
const lines = [];

// stdin = what you type, stdout = the screen. rl reads stdin one line at a time.
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

if (reverse) console.log("Type lines in Korean (ko -> en).");
else console.log("Type lines in English keys (en -> ko).");
console.log('Type "q" to finish.');

rl.on("line", (line) => {
  if (line.trim() === "q") {
    rl.close();
    return;
  }
  lines.push(line);
});

rl.on("close", () => {
  // TODO
  // Drop empty lines, convert each line with inko, and print them numbered:
  //   1. 오픈 소스
  //   2. 깃허브 노드
  // Use ko2en instead of en2ko when reverse is true.
});
