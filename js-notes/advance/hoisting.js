/**
 * 14 - Hoisting
 *
 * Topics:
 * - How var, let, const behave
 * - Function hoisting
 *
 * Hoisting is JS engine behavior: declarations are moved to the top of their scope.
 * But the initialization timing differs across var / let / const and functions.
 */

// ---------- var hoisting ----------
function varHoist() {
  console.log("a before declaration:", a); // undefined (declaration hoisted, init not)
  var a = 10;
  console.log("a after init:", a); // 10
}
varHoist();

// ---------- let / const and TDZ (Temporal Dead Zone) ----------
function letConstDemo() {
  // console.log('b before declaration:', b); // ReferenceError: cannot access 'b' before initialization
  let b = 2;
  const c = 3;
  console.log("b,c after init:", b, c);
}
letConstDemo();

// ---------- Function hoisting ----------
hoistedFunction(); // works — function declaration hoisted

function hoistedFunction() {
  console.log("I am hoisted function");
}

// Function expressions (not hoisted as functions)
try {
  notHoisted(); // TypeError: notHoisted is not a function OR ReferenceError if declared with let
} catch (err) {
  console.error("calling notHoisted failed:", err.message);
}

var notHoisted = function () {
  console.log("function expression");
};

/**
 * Summary:
 * - var: declaration hoisted, initialized to undefined at top of function scope.
 * - let/const: declaration is hoisted but is uninitialized until runtime line (TDZ) — accessing before init throws ReferenceError.
 * - function declarations: hoisted fully (name + body), so callable before definition.
 * - function expressions assigned to var: variable hoisted as undefined, so not callable before assignment.
 */
