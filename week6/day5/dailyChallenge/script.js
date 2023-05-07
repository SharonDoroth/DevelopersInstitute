function allTruthy(...args) {
  for (let arg of args) {
    if (!arg) {
      return false;
    }
  }
  return true;
}
console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true)); 
console.log(allTruthy(5, 4, 3, 2, 1, 0)); 