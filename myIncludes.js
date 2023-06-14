// The myIncludes function is a custom implementation of the Array.prototype.includes method provided in JavaScript.
// It takes an array and a callback function as parameters.
// The function iterates through each element in the array and applies the callback function to it.
// If the callback function returns false for any element in the array, myIncludes immediately returns false.
// If the callback function returns true for all elements, myIncludes returns true.

// In the provided example, the array is [3, 6, 9, 12, 10].
// The myIncludes function is called with the array and a callback function that checks if an element is equal to 22.
// The callback function returns false for each element since none of them are equal to 22.
// Therefore, the output of has22 is false.


function myIncludes(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], arr)){
            return false
        }
    }
    return true
}

const array = [3,6,9,12,10]

const has22 = myIncludes(array, function(ele, array){
    return ele == 22
})

console.log(has22) // Should return false as the array does not contain 22.