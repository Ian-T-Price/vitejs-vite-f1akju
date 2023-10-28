const uniqueKey = Symbol();

const data = {};
data[uniqueKey] = "Some value";

console.log(data[uniqueKey]); // "Some value"
console.log(data); // "Some value"

const values = [1, 2, 3];

values.description = "Array of numbers";

console.log(values); // [1, 2, 3, description: "Array of numbers"]

const regex = /^https?/i;  
const url = "https://learnjavascript.online";
const result = url.match(regex);

console.log(result);

/**
 * @param {string} str
 */
 function getHashtags(str) {
  const regex = /#[a-z0-9]+/gi;
  return str.match(regex);
}

// Sample usage - do not modify
console.log(getHashtags("Hello World!")); // null
console.log(getHashtags("I love #JavaScript")); // ["#javascript"]
console.log(getHashtags("Welcome to my #amazing #website")); // ["#amazing", "#website"]
