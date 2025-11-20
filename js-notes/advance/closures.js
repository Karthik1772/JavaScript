/**
 * 11 - Closures
 *
 * Topics:
 * - Lexical environment
 * - Practical examples: counter, data hiding
 *
 * A closure is when an inner function retains access to variables from an outer function
 * even after the outer function has finished executing. That retained scope is the
 * lexical environment captured by the inner function.
 */

// ---------- Lexical environment (simple demo) ----------
function outer() {
  const greeting = "Hello";
  function inner(name) {
    // inner "closes over" greeting
    return `${greeting}, ${name}!`;
  }
  return inner;
}

const sayHello = outer();
console.log(sayHello("Karthik")); // Hello, Karthik!
// Even though outer() finished, inner still has access to greeting.

// ---------- Practical: Counter ----------
function createCounter(initial = 0) {
  let count = initial; // private variable inside lexical env
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    value() {
      return count;
    },
  };
}

const counter = createCounter(5);
console.log(counter.value()); // 5
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5

// count is not accessible from outside — data hiding via closure

// ---------- Practical: Data hiding with functions ----------
function createUser(name) {
  let secret = "initial-secret"; // private
  return {
    getName() {
      return name;
    },
    setSecret(newSecret) {
      secret = newSecret;
    },
    revealSecret() {
      return secret;
    },
  };
}

const user = createUser("Sam");
console.log(user.getName()); // Sam
user.setSecret("shh!");
console.log(user.revealSecret()); // shh!

/**
 * Quick tips:
 * - Closures are used to create private state (modules, factory functions).
 * - Beware of accidentally capturing mutable large structures (memory leak risk).
 */
