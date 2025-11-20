/**
 * 13 - Event Loop + Microtasks / Macrotasks
 *
 * Topics:
 * - How JavaScript executes code (call stack, event loop)
 * - Microtasks vs Macrotasks (Promises, setTimeout)
 * - How Promises work internally (briefly)
 *
 * Model:
 * - Call stack: runs synchronous code.
 * - Task queues: macrotask queue (setTimeout, I/O, setInterval, UI events) and microtask queue (Promise callbacks, MutationObserver).
 * - Event loop: when call stack is empty, microtasks run before macrotasks.
 */

// ---------- Simple event loop demo ----------
console.log("script start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise then (microtask) 1");
  })
  .then(() => {
    console.log("promise then (microtask) 2");
  });

console.log("script end");

/*
Expected output order:
1. script start
2. script end
3. promise then (microtask) 1
4. promise then (microtask) 2
5. setTimeout callback (macrotask)
*/

// ---------- Promise internals (conceptual) ----------
/*
- A Promise is an object that represents a future value.
- Promise constructor takes an executor (resolve, reject).
- When resolve() is called, any .then callbacks are scheduled as microtasks.
- The microtask queue runs after the current synchronous code finishes, before macrotasks.
*/

// Small custom "mini-promise-like" scheduler demo (simplified)
function miniResolve(value, onResolved) {
  // mimic queueMicrotask by using Promise.resolve()
  Promise.resolve().then(() => onResolved(value));
}

console.log("mini start");
miniResolve("mini-value", (v) => console.log("mini resolved:", v));
console.log("mini end");
// Output: mini start -> mini end -> mini resolved: mini-value

/**
 * Quick tips:
 * - Use microtasks (Promises) when you want callbacks to run ASAP after current code.
 * - setTimeout(..., 0) schedules macrotask — it runs after microtasks.
 * - Heavy synchronous work blocks the event loop — break into chunks if needed.
 */
