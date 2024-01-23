// Roman Numerals Encoder
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/javascript

function solution(number) {
  // convert the number to a roman numeral
  let result = "",
    decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

  decimals.map((value, index) => {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  return result;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(19));
console.log(solution(22));
console.log(solution(15));

console.log(solution(1000));
console.log(solution(1001));
console.log(solution(1990));
console.log(solution(2007));
console.log(solution(2008));
