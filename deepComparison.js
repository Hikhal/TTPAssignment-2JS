// The function determines whether or not a and b are strictly equal. It returns true if they are.
// It returns false if either an or b is null or not an object.
// It determines whether a and b have the same number of keys if both are objects. If not, the algorithm returns false.
// Then it determines whether each key in an is present in b and whether its value in a passes a recursive deepEqual call when compared to its value in b.
// The function returns true, indicating that a and b are profoundly equal, if all of these checks are successful. It returns false if any check is unsuccessful.

function deepEqual(a, b) {
    if (a === b) return true;
  
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
      return false;
    }
  
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }

  let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));  // Should output: true
console.log(deepEqual(obj, {here: 1, object: 2}));  // Should output: false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));  // Should output: true

// Testing with arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [1, 2, '3']; // note the string '3' instead of number 3
console.log(deepEqual(arr1, arr2));  // Should output: true
console.log(deepEqual(arr1, arr3));  // Should output: false