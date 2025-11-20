/**
 * 07 - Higher-Order Array Methods
 *
 * Covers:
 * - map
 * - filter
 * - reduce
 * - find
 * - sort
 *
 * These methods take functions as arguments and are staples of functional-style array processing.
 */

const numbers = [1, 2, 3, 4, 5];

// ---------- map() ----------
const doubled = numbers.map((n) => n * 2);
console.log("doubled:", doubled); // [2,4,6,8,10]

// map with objects
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const names = users.map((u) => u.name);
console.log("names:", names);

// ---------- filter() ----------
const evens = numbers.filter((n) => n % 2 === 0);
console.log("evens:", evens); // [2,4]

// Filter objects
const admins = [
  { name: "Sam", role: "admin" },
  { name: "Joe", role: "user" },
].filter((u) => u.role === "admin");
console.log("admins:", admins);

// ---------- reduce() ----------
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("sum:", sum); // 15

// Reduce to group by property (example)
const items = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "banana" },
];
const grouped = items.reduce((acc, item) => {
  if (!acc[item.type]) acc[item.type] = [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log("grouped:", grouped); // { fruit: ['apple','banana'], veg: ['carrot'] }

// ---------- find() ----------
const firstLarge = numbers.find((n) => n > 3);
console.log("firstLarge:", firstLarge); // 4

// Find an object
const foundUser = users.find((u) => u.id === 2);
console.log("foundUser:", foundUser);

// ---------- sort() ----------
// Sort mutates the array (in place)
// Numeric ascending
const numsCopy = [...numbers]; // copy before sorting
numsCopy.sort((a, b) => a - b);
console.log("sorted asc:", numsCopy);

// Sort strings (alphabetical)
const fruits = ["banana", "apple", "cherry"];
fruits.sort(); // default sorts strings lexicographically
console.log("fruits sorted:", fruits);

// Sorting objects by a numeric field
const scores = [
  { name: "A", s: 50 },
  { name: "B", s: 80 },
];
scores.sort((p, q) => q.s - p.s); // descending
console.log("scores:", scores);

/**
 * Quick tips:
 * - Prefer map/filter/reduce for transformations instead of for-loops when it improves readability.
 * - Avoid mutating arrays unless intentional (use spreads to copy).
 * - Remember sort() changes the array; copy first if you need original preserved.
 */
