function myFunc(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) { //Add base case for negative numbers
    return b;
  } else if (a > 1000) { // Add a check to limit recursion depth
    return Infinity; // Or handle large input values appropriately
  }
  return myFunc(a - 1, a + b);
}
