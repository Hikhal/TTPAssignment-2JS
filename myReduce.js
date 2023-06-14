
// The myReduce function is a custom implementation of the Array.prototype.reduce method provided in JavaScript.
// It takes an array and a callback function as parameters.
// The function iterates through the array, starting from the second element, and applies the callback function to each element.
// The callback function takes four parameters: the accumulator, the current element, the current index, and the original array.
// The accumulator stores the accumulated result of the callback function for each iteration.
// The return value of the callback function is assigned to the accumulator in each iteration.
// After iterating through all the elements, the final value of the accumulator is returned.
// The original array is not modified by the function.

// In the example, the arr array is defined as [1, 2, 3, 4, 5].
// The myReduce function is called with arr and a callback function that multiplies the accumulator by the current element.
// The initial accumulator is set to the first element of the array (1).
// The callback function multiplies the accumulator (initially 1) with each subsequent element.
// The final result is the product of all the elements in the array (1 * 2 * 3 * 4 * 5), which is 120.
// The value of sum is assigned the result of calling myReduce, and it is then logged to the console, producing the output 120.


function myReduce(array, callback) {
    let accumulator = array[0];
    for (let i = 1; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

const arr = [1, 2, 3, 4, 5];

let sum = myReduce(arr, function(acc, curr) {
    return acc * curr;
});

console.log(sum)  // Output: 120
