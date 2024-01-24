// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x) {
//     let result = x[0];
//     for(let i = 1; i < x.length; i++) {
//         result = result * x[i];
//     };
//     return result;
// }

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// const grow = (x) => x.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

const grow = (x) => x.reduce((accumulator, currentValue) => accumulator * currentValue)

// console.log(grow([1, 2, 3]))
// console.log(grow([4, 1, 1, 1, 4]));
// console.log(grow([2, 2, 2, 2, 2, 2]));

const assert = require("assert");
// chai.config.truncateThreshold = 0;
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
  });
});
