// Convert string to camel case
// www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  let count = (str.match(/-|_/g) || []).length;

  for (let i = 0; i < count; i++) {
    let index = str.indexOf(str.match(/-|_/g)[0]);
    let char = str.slice(index + 1, index + 2);
    let split = str.split("");
    split.splice(index, 2, char.toUpperCase());
    str = split.join("");
  }
  return str;
}

console.log(toCamelCase(""));
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("A-B-C"));

// Best Practice

function toCamelCaseBest(str) {
  const regExp = /[-_]\w/gi; // \w mean "Match any word character"
  return str.replace(regExp, (match) => match.charAt(1).toUpperCase());

  // return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCaseBest(""));
console.log(toCamelCaseBest("the-stealth-warrior"));
console.log(toCamelCaseBest("The_Stealth_Warrior"));
console.log(toCamelCaseBest("A-B-C"));
