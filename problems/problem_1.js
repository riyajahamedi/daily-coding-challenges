// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

function roughSolution(x, y) {
  if (!Array.isArray(x) || !y) return false;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) return true;
    for (j = i + 1; j < x.length; j++) {
      const val = x[i] + x[j];
      if (val === y) return true;
    }
  }
  return false;
}

function optimizedSolution(x, y) {
  if (!Array.isArray(x) || !y) return false;
  const reqNum = {};
  for (let i = 0; i < x.length; i++) {
    if (x[i] in reqNum || x[i] === y) return true;
    const req = y - x[i];
    reqNum[req] = req;
  }
  return false;
}

console.log("------------------------------------");
console.log("Rough solution:");
const start = process.hrtime.bigint();
console.log(roughSolution([10, 15, 3, 7], 17));
const end = process.hrtime.bigint();
console.log(`Execution time: ${end - start} ns`);
console.log("------------------------------------");

console.log("------------------------------------");
console.log("Optimized solution:");
const oStart = process.hrtime.bigint();
console.log(optimizedSolution([10, 15, 3, 7], 17));
const oEnd = process.hrtime.bigint();
console.log(`Execution time: ${oEnd - oStart} ns`);
console.log("------------------------------------");

// Test arrays
// [3, 15, 8, 7, 11, 18]
// [10, 15, 3, 7]
// [3, 11, 8, 7, 15, 18]
// [3, 14]
// [17]
// []
