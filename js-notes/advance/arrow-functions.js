/**
 * 17 - Arrow Functions
 *
 * Topics:
 * - Syntax
 * - Returning objects
 * - Difference vs regular functions (especially `this`)
 */

// ---------- Syntax ----------
const add = (a, b) => a + b;
console.log("add:", add(2, 3)); // 5

// Single param: parentheses optional
const square = (x) => x * x;
console.log("square:", square(4)); // 16

// No params: use empty parentheses
const greet = () => "Hello";
console.log(greet());

// ---------- Returning objects ----------
const makeUser = (name) => ({ name }); // parentheses around object literal required
console.log(makeUser("Karthik")); // { name: 'Karthik' }

// ---------- Arrow vs Regular: `this` ----------
const regularObj = {
  id: 1,
  regularFunc: function () {
    return this.id; // this -> regularObj
  },
  arrowFunc: () => {
    return this.id; // this from outer scope (not regularObj)
  },
};
console.log("regularFunc:", (regularFunc = regularObj.regularFunc())); // 1
console.log("arrowFunc:", regularObj.arrowFunc()); // likely undefined (depends on outer this)

// ---------- When NOT to use arrow functions ----------
/*
 - Methods that need their own `this` should be regular functions.
 - Constructors (with new) must be regular functions.
 - Event listeners where you want `this` to be the DOM element should be regular functions.
*/

/**
 * Quick tips:
 * - Arrow functions are concise and great for short callbacks.
 * - If you need function scoping or `this` bound to the caller, prefer regular functions.
 */
