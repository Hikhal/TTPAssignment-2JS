// The myPush function is a custom implementation of the Array.prototype.push method provided in JavaScript.
// It takes an array and an elementToAdd as parameters.
// The function appends the elementToAdd to the end of the array by assigning it to the next index (array.length).
// It then returns the new length of the array after the element has been added.
// The original array is modified directly.

function myPush(array, elementToAdd) {
    array[array.length] = elementToAdd;
    return array.length;
}

const arr = [1,2,3,4,5]
let length = myPush(arr, 8)
console.log(length) // Should return 6