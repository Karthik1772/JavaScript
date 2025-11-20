/**
 * 09 - LocalStorage / SessionStorage
 *
 * Covers:
 * - setItem, getItem, removeItem
 * - Storing objects via JSON
 *
 * Note:
 * - localStorage persists across browser sessions (until cleared).
 * - sessionStorage persists for the current browser tab (cleared when tab closes).
 * - Both store only strings; use JSON.stringify/parse to store objects.
 */

// ---------- Basic set/get/remove ----------
localStorage.setItem("name", "Karthik");
console.log("name from localStorage:", localStorage.getItem("name"));
localStorage.removeItem("name"); // remove

// ---------- Storing objects ----------
const user = { id: 1, name: "A", preferences: { theme: "dark" } };

// Save object (serialize)
localStorage.setItem("user", JSON.stringify(user));

// Read object (deserialize)
const raw = localStorage.getItem("user");
const parsedUser = raw ? JSON.parse(raw) : null;
console.log("parsedUser:", parsedUser);

// ---------- Updating stored object safely ----------
function updateStoredUser(newProps) {
  const raw = localStorage.getItem("user");
  const current = raw ? JSON.parse(raw) : {};
  const updated = { ...current, ...newProps };
  localStorage.setItem("user", JSON.stringify(updated));
}
updateStoredUser({ loggedIn: true });
console.log("updated:", JSON.parse(localStorage.getItem("user")));

// ---------- sessionStorage ----------
sessionStorage.setItem("sessionKey", "abc123");
console.log("sessionKey:", sessionStorage.getItem("sessionKey"));
sessionStorage.removeItem("sessionKey");

// ---------- Clearing storage ----------
localStorage.removeItem("user"); // or localStorage.clear() to wipe all keys

/**
 * Quick tips:
 * - Beware of size limits (typically around 5–10 MB).
 * - Avoid storing secrets or large binary data in local/session storage.
 * - Always wrap JSON.parse in try/catch when reading untrusted data.
 */
