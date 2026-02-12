/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {
 * { whippedCream?: boolean, extraShot?: boolean }
 * } extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  var baseprice = 0.0;
  if (size === "small") baseprice = 3.0;
  else if (size === "medium") baseprice = 4.0;
  else if (size === "large") baseprice = 5.0;
  else return -1;

  if (type === "latte") baseprice += 1.0;
  else if (type === "cappuccino") baseprice += 1.5;
  else if (type === "mocha") baseprice += 2.0;
  else if (type === "regular") baseprice = baseprice;
  else return -1;

  if (extras.whippedCream === true) baseprice += 0.5;
  if (extras.extraShot === true) baseprice += 0.75;

  var roundedoff = baseprice.toFixed(2);
  return parseFloat(roundedoff);
}
