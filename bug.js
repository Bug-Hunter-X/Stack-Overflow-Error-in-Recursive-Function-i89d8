function myFunc(a, b) {
  if (a === 0) {
    return b;
  }
  return myFunc(a - 1, a + b);
}