// The myLastIndexOf function is a custom implementation of the Array.prototype.lastIndexOf method provided in JavaScript.
// It takes an array and a target element as parameters.
// The function iterates over the array in reverse order, starting from the last element, and searches for the last occurrence of the target element.
// If the target element is found, myLastIndexOf returns the index of the last occurrence.
// If the target element is not found, myLastIndexOf returns -1.
// The original array is not modified by the function.

function myLastIndexOf(arr, val) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }
  
const arr = [2, 4, 6, 8, 10, 8, 12];
const target = 8;

const lastIndex = myLastIndexOf(arr, target);

console.log(lastIndex); // Output: 5
