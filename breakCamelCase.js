// Break camelCase
// https://www.codewars.com/kata/5208f99aee097e6552000148

// complete the function
function solution(string) {
  return string.replace(/[A-Z]/g, (match) => (match = " " + match));
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
console.log(solution("identifier"));
