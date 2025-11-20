/**
 * 05 - Spread & Rest Operators
 *
 * Covers:
 * - Spread in arrays and objects
 * - Rest in function parameters (and array/object rest examples)
 *
 * Notes:
 * - Spread (...) "expands" an iterable (array, string) or object into individual elements/props.
 * - Rest (...) "collects" remaining elements/props into an array/object.
 */

// ---------- Spread in arrays ----------
const a = [1, 2, 3];
const b = [4, 5];

// Combine arrays with spread
const combined = [...a, ...b]; // [1,2,3,4,5]
console.log("combined:", combined);

// Copy an array (shallow copy)
const copyA = [...a];
copyA.push(99);
console.log("a:", a, "copyA:", copyA); // original not changed

// Spread with strings
const chars = [..."hello"]; // ['h','e','l','l','o']
console.log("chars:", chars);

// ---------- Spread in objects ----------
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Bengaluru", age: 30 };

// Combine objects (later properties overwrite earlier ones)
const merged = { ...obj1, ...obj2 };
console.log("merged:", merged); // age from obj2

// Copy object
const copyObj = { ...obj1 };

// ---------- Function parameter rest ----------
function sum(...numbers) {
  // collects all args into an array
  return numbers.reduce((s, n) => s + n, 0);
}
console.log("sum:", sum(1, 2, 3, 4)); // 10

// Using rest with named params
function greet(greeting, ...names) {
  return `${greeting} ${names.join(" & ")}`;
}
console.log(greet("Hello", "Tony", "Steve", "Natasha"));

// ---------- Array destructuring with rest ----------
const nums = [10, 20, 30, 40];
const [first, second, ...restNums] = nums;
console.log(first, second, restNums); // 10 20 [30,40]

// ---------- Object rest ----------
const person = { id: 1, name: "Bob", role: "dev" };
const { id, ...otherProps } = person;
console.log("id:", id, "otherProps:", otherProps);

/**
 * Quick tips:
 * - Use spread to create new arrays/objects (avoid mutating original).
 * - Use rest in function signatures to accept variable argument lists.
 * - Rest in destructuring allows grabbing the "remaining" elements/props.
 */

// 🔙 [Back to Home](../README.md)
