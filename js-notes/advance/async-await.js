/**
 * 20 - Async & Await in JavaScript
 *
 * Topics:
 * - What is async?
 * - What is await?
 * - Using fetch() with async/await (your example)
 * - Error handling with try/catch
 * - Sequential vs Parallel async code
 *
 * async/await makes asynchronous code look synchronous.
 */

// ------------------------------------------------------------
// ⭐ 1. Your Example — Fetch Using async/await
// ------------------------------------------------------------

async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Fetched using async/await:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAsync();

// ------------------------------------------------------------
// ⭐ 2. Async/Await with Custom Promise
// ------------------------------------------------------------

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Waited for ${ms}ms`), ms);
  });
}

async function exampleWait() {
  console.log("Starting wait...");
  const msg = await wait(1000);
  console.log(msg);
}

exampleWait();

// ------------------------------------------------------------
// ⭐ 3. Parallel Async Calls (Faster)
// ------------------------------------------------------------

async function fetchTwoTodos() {
  try {
    const p1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
    const p2 = fetch("https://jsonplaceholder.typicode.com/todos/2");

    const responses = await Promise.all([p1, p2]);
    const data = await Promise.all(responses.map((r) => r.json()));

    console.log("Parallel fetch results:", data);
  } catch (error) {
    console.error("Parallel fetch error:", error);
  }
}

fetchTwoTodos();

// ------------------------------------------------------------
// ⭐ 4. Handling Errors in async/await
// ------------------------------------------------------------

async function fetchWithTryCatch() {
  try {
    const res = await fetch("https://invalid-url.com/test");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Caught async error:", error.message);
  }
}

fetchWithTryCatch();

/**
 * SUMMARY:
 * - async makes a function return a Promise.
 * - await pauses execution until a Promise settles.
 * - Use try/catch for error handling.
 * - Async/await is cleaner and more readable than .then() chaining.
 */
