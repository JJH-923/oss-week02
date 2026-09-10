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

import readline from "node:readline";
import Inko from "inko";

const inko = new Inko();

const reverse = process.argv.includes("--reverse");
const lines = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
  lines
    .filter((line) => line.trim() !== "")
    .map((line) => {
      if (reverse) {
        return inko.ko2en(line);
      } else {
        return inko.en2ko(line);
      }
    })
    .forEach((line, i) => {
      console.log(`${i + 1}. ${line}`);
    });
});