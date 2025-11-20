/**
 * 08 - Error Handling
 *
 * Covers:
 * - try...catch
 * - throw
 * - Custom Error classes
 */

// ---------- Basic try...catch ----------
function parseJSON(json) {
  try {
    const value = JSON.parse(json);
    console.log("Parsed:", value);
    return value;
  } catch (err) {
    console.error("Invalid JSON:", err.message);
    return null;
  } finally {
    // runs always (optional cleanup)
    console.log("parseJSON finished");
  }
}

parseJSON('{"ok": true}');
parseJSON("invalid json");

// ---------- Throwing errors ----------
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero"); // throws synchronous error
  }
  return a / b;
}

try {
  console.log(divide(4, 2)); // 2
  console.log(divide(1, 0)); // throws
} catch (err) {
  console.error("Caught error:", err.message);
}

// ---------- Custom Error ----------
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateUser(user) {
  if (!user.email) {
    throw new ValidationError("Email is required", "email");
  }
  if (!user.age || user.age < 18) {
    throw new ValidationError("Must be at least 18", "age");
  }
  return true;
}

try {
  validateUser({ name: "X" });
} catch (err) {
  if (err instanceof ValidationError) {
    console.error("Validation failed on", err.field, "-", err.message);
  } else {
    console.error("Other error:", err);
  }
}

// ---------- Async error handling (promises/async-await) ----------
async function fetchData() {
  try {
    // simulate a fetch with Promise.reject
    await Promise.reject(new Error("Network error"));
  } catch (err) {
    console.error("Async error:", err.message);
  }
}

fetchData();

/**
 * Quick tips:
 * - Use try...catch around code that can throw (sync or await async calls).
 * - Create custom error classes when you need to attach extra info (field, code).
 * - Always avoid swallowing errors silently — log or rethrow as appropriate.
 */
