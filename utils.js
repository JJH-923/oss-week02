// utils.js — helpers for P6. p6_wordfreq.js imports all three from here.

// tokenize is given. Regular expressions are not part of this course.
// tokenize("Ship it, ship it!") -> ["ship", "it", "ship", "it"]
export function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")   // anything that is not a-z or whitespace -> space
    .split(/\s+/)                // split on runs of whitespace
    .filter((w) => w !== "");    // drop empty strings
}

// countWords(["ship", "it", "ship"]) -> { ship: 2, it: 1 }
// Same pattern as P4 (b), but you do not know the words in advance:
// a word you have not seen yet has no key (=== undefined), so set it to 0 first.
export function countWords(words) {
  const counts = {};
  words.forEach((w) => {
    if (counts[w] === undefined) counts[w] = 0;
    counts[w] += 1;
  });
  return counts;
 
}

// topN({ ship: 2, it: 1, code: 9 }, 2) -> [["code", 9], ["ship", 2]]
// Object.entries(counts) gives [["ship", 2], ["it", 1], ["code", 9]]. Sort it, then cut it.
export function topN(counts, n) {
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, n);
}
