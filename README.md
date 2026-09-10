# oss-week02 — Node, JavaScript, npm

Week 2 hands-on for *Open Source Software Design and Lab* (Kwangwoon Univ., 2026).

Replace this first line with your name and student ID, commit, push. That is P0.

## Rules

- Ask AI anything: concepts, error messages, docs. **Do not paste generated code.** Type every line yourself.
- Inline completions off: `Ctrl+Shift+P` → *GitHub Copilot: Toggle (Enable/Disable) Inline Suggestions*.
- One problem, one file, one commit. Use the commit message given for each problem.
- Commit and push from VS Code: `Ctrl+Shift+G` → stage (`+`) → message → **Commit** → **Sync Changes**. Terminal Git starts in week 4.
- Stuck for 15 minutes? Raise a hand.
- **Push by 11:45.** No push, no attendance.

## P0. Project setup (8 min) — `chore: init project`

1. This repo is a template. Click **Use this template → Create a new repository**. Name it `oss-week02`, **Public**.
2. On your new repo: **Code → HTTPS → copy**. In VS Code: `Ctrl+Shift+P` → **Git: Clone** → paste → pick a folder → Open.
3. Open `package.json`. `"type": "module"` is already there. Change nothing yet.
4. Edit the first line of this README with your name and student ID. Save.
5. `Ctrl+Shift+G` → stage → `chore: init project` → **Commit** → **Sync Changes**.

Check: Source Control shows no changes, and github.com/&lt;you&gt;/oss-week02 shows your name. `node_modules` must never appear in Source Control.

## P1. Predict the output (8 min) — `p1: equality predictions`

`p1_predict.js` has 15 `console.log` lines using `==`, `===`, `typeof`, and type coercion like `"4" - true`.
Write your guess in each `// prediction:` comment **before** running. Then run and see how many you got wrong.
For every miss, add one line explaining why. Wrong predictions are the point. Commit them.

## P2. Diamond (8 min) — `p2: diamond`

Print a diamond of `*` whose width comes from the command line.

```
$ node p2_diamond.js 5
  *
 ***
*****
 ***
  *
```

## P3. Scores pipeline (8 min) — `p3: scores pipeline`

Run 20 random scores through a four-step pipeline (odd only → doubled → descending → first half):
once step by step with a print after every step, and once as a single method chain.
Then print the original array again and explain why it looks the way it does.
You will need `filter`, `map`, `sort`, `slice`, `Math.ceil`. Look them up if unsure.

**P0–P3 is today's target line.** P4–P6 are for when you have time.

## P4. Roster queries (12 min) — `p4: roster queries`

`p4_roster.js` — an array of student objects. This is the shape of every API response you will meet.

- (a) Names with score ≥ 80, as an array of strings.
- (b) Students per department → `{ CS: 5, EE: 3, ME: 2 }`. Start from an object with all three departments at 0.
- (c) Ranking by score, one line each: `1. Soyeon (CS) 97`. `sort()` changes the array it is called on. Copy first.

You will need `filter`, `map`, `forEach`, `sort`, and `slice`.

```
80 or more: [ 'Yuna', 'Minho', 'Hana', 'Soyeon', 'Dohyun', 'Seoyeon' ]
per dept: { CS: 5, EE: 3, ME: 2 }
1. Soyeon (CS) 97
2. Yuna (CS) 92
3. Minho (EE) 88
...
```

## P5. Korean-typo fixer CLI (15 min) — `p5: inko cli`

`main.js`. Today's goal: a CLI that uses an npm package.
`"dhvms thtm"` was typed in English mode. Turn it back into `오픈 소스`.

1. In the repo root: `npm install inko`
2. Import it at the top of `main.js` and create an instance.
3. Fill in the `close` handler. The readline part is given; comments in the file explain it.

```
$ node main.js
Type lines in English keys (en -> ko).
Type "q" to finish.
dhvms thtm
rltgjqm shem
q
1. 오픈 소스
2. 깃허브 노드
```

`node main.js --reverse` goes the other way (Korean → English keys).

Then check: `package.json` has `inko` under `dependencies`, `node_modules/inko` exists, and Source Control does not list `node_modules`.

## P6. Word frequency + your own module (12 min) — `p6: word frequency`

`p6_wordfreq.js` + `utils.js`. `tokenize` is given in `utils.js`; implement `countWords` and `topN` there and export them.
Then import all three from `p6_wordfreq.js` and print the result. Your own file: `./` and `.js` are both required.

```
$ node p6_wordfreq.js sample.txt
48 words, 17 distinct
code     9
the      7
ship     5
it       5
you      3
```

Done early? Explain your P3 (c) and P6 answers to the person next to you.

## Common errors

| You see | Cause | Fix |
|---|---|---|
| `node: command not found` / `'node' is not recognized` | Terminal opened before Node was installed | Open a **new** terminal (or restart VS Code). Still failing → reinstall Node LTS, reboot. |
| `Cannot use import statement outside a module` | No `"type": "module"` in package.json | Add it at the top level. Mind the comma. (Already there in this template.) |
| `tokenize is not defined` | Forgot the `import` line in p6_wordfreq.js | `import { tokenize, countWords, topN } from "./utils.js";` |
| `Cannot find module './utils'` | ESM needs `./` **and** `.js` | `import { ... } from "./utils.js";` |
| `does not provide an export named 'countWords'` | Forgot `export` in utils.js | `export function countWords(...)` |
| `Cannot find package 'inko'` | Wrong folder, or never ran `npm install` | Terminal must be in the repo root (where package.json is) → `npm install inko` |
| Source Control lists thousands of `node_modules/` files | `.gitignore` is missing | This template has one. If you deleted it: put `node_modules/` back in `.gitignore`. If already committed: delete the `node_modules` folder, commit, then `npm install` again. |
| `[ 10, 3, 8 ].sort()` gives `[ 10, 3, 8 ]` | Default sort is by string | `arr.sort((a, b) => a - b)` |

Read the error message top to bottom. The file name and line number are in it.
Ask AI to *explain* the message. Do not ask it to write the fix.
