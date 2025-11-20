/**
 * 12 - Scope Chain
 *
 * Topics:
 * - Local vs global vs function scope
 * - Block vs function scope
 *
 * JS looks up variables in the scope chain: current scope -> outer scope -> ... -> global.
 */

// ---------- Global vs Function (local) scope ----------
const GLOBAL_VAR = "I am global";

function showScopes() {
  const localVar = "I am local";
  console.log(GLOBAL_VAR); // accessible
  console.log(localVar); // accessible
}
showScopes();
// console.log(localVar); // ReferenceError: localVar is not defined

// ---------- Block scope vs Function scope ----------
function varLetConstDemo() {
  if (true) {
    var x = "var variable"; // function-scoped
    let y = "let variable"; // block-scoped
    const z = "const variable"; // block-scoped
    console.log("inside block:", x, y, z);
  }
  console.log("after block, x:", x); // accessible (var)
  // console.log('after block, y:', y); // ReferenceError
  // console.log('after block, z:', z); // ReferenceError
}
varLetConstDemo();

// ---------- Nested functions and scope chain ----------
function outer(a) {
  const outerVar = "outer";
  function inner(b) {
    const innerVar = "inner";
    // lookup order: innerVar -> outerVar -> a -> GLOBAL_VAR -> window/globalThis
    return `${innerVar}, ${outerVar}, ${a}, ${b}`;
  }
  return inner;
}
const fn = outer("paramA");
console.log(fn("paramB")); // inner, outer, paramA, paramB

/**
 * Quick tips:
 * - Use let/const for predictable block scope.
 * - var is function-scoped and can cause subtle bugs (avoid in modern code).
 * - Global variables are accessible everywhere — avoid polluting global scope.
 */
