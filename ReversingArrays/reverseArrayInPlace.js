// The reverseArrayInPlace method uses nested for loops to reverse the order of an array's elements when given an array as input.
// From the end of the array toward the middle, it iterates over the first half of the array using an outer loop (i) and an inner loop (j).
// It switches the elements at indexes i and j inside the loop, thereby reversing their order.
// Without making a new array, the function alters the initial array in place.

function reverseArrayInPlace(arr) {
    let middle = Math.floor(arr.length / 2);
    for (let i = 0; i < middle; i++) {
      let j = arr.length - 1 - i;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  
  var arr = ['A', 'B', 'C'];
  reverseArrayInPlace(arr);
  console.log(arr); // Output: ['C', 'B', 'A']