/**
 * 06 - Destructuring
 *
 * Covers:
 * - Array destructuring
 * - Object destructuring
 * - Default values in destructuring
 *
 * Destructuring extracts values from arrays/objects into named variables.
 */

// ---------- Array destructuring ----------
const colors = ["red", "green", "blue"];

// Basic
const [primary, secondary, tertiary] = colors;
console.log(primary, secondary, tertiary); // red green blue

// Skip items
const [firstColor, , thirdColor] = colors;
console.log(firstColor, thirdColor); // red blue

// Swap variables with destructuring
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log("x,y:", x, y); // 2,1

// Default values (when array element is undefined)
const arr = [5];
const [n1 = 10, n2 = 20] = arr;
console.log(n1, n2); // 5,20

// ---------- Object destructuring ----------
const config = {
  host: "localhost",
  port: 8080,
  secure: false,
};

// Basic object destructuring (by property name)
const { host, port } = config;
console.log(host, port);

// Rename variables while destructuring
const { secure: isSecure } = config;
console.log("isSecure:", isSecure);

// Default values in object destructuring
const { timeout = 1000 } = config;
console.log("timeout:", timeout);

// Nested destructuring
const user = {
  id: 42,
  profile: {
    name: "Jane",
    socials: { twitter: "@jane" },
  },
};
const {
  profile: {
    name,
    socials: { twitter },
  },
} = user;
console.log(name, twitter);

// Function parameter destructuring with defaults
function createUser({ name = "Guest", role = "user" } = {}) {
  return { name, role };
}
console.log(createUser({ name: "Karthik" })); // {name:'Karthik', role:'user'}
console.log(createUser()); // {} allowed because of = {} default param

/**
 * Quick tips:
 * - Use destructuring to make code clearer, especially when parameters are objects.
 * - Always include defaults if a value might be missing (helps avoid undefined).
 */
