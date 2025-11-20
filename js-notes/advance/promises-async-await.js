/**
 * 19 - Promises in JavaScript
 *
 * Topics:
 * - What is a Promise?
 * - Promise states
 * - then(), catch()
 * - Using fetch() with Promises (your example)
 * - Creating your own Promise
 *
 * A Promise represents a value that will be available now, later, or never.
 */

// ------------------------------------------------------------
// ⭐ 1. Basic Promise Example
// ------------------------------------------------------------

const samplePromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

samplePromise
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

// ------------------------------------------------------------
// ⭐ 2. Your Example — Using fetch() WITHOUT async/await
// ------------------------------------------------------------

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json()) // convert response to JSON
    .then((data) => {
      console.log("Fetched using Promises:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchData();

// ------------------------------------------------------------
// ⭐ 3. Promise Chaining Example (your pattern)
// ------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => result.json())
  .then((data) => console.log("Chained promise data:", data))
  .catch((error) => {
    console.error("Chained promise error:", error);
  });

// ------------------------------------------------------------
// ⭐ 4. Creating Your Own Custom Promise
// ------------------------------------------------------------

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Waited for ${ms}ms`), ms);
  });
}

wait(1500).then((msg) => console.log(msg));

/**
 * SUMMARY:
 * - Promises use .then() for success and .catch() for errors.
 * - fetch() returns a Promise.
 * - Promises allow chaining.
 * - Use custom Promises for timers, animations, async ops, etc.
 */
