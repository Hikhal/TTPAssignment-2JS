// The myEvery function is a custom implementation of the Array.prototype.every method provided in JavaScript.
// It takes an array and a callback function as parameters.
// The function iterates over each element in the array and applies the callback function to it.
// If the callback function returns false for any element in the array, myEvery immediately returns false.
// If the callback function returns true for all elements, myEvery returns true.
// The original array is not modified by the function.

function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], arr)){
            return false
        }
    }
    return true
}

const array = [3,6,9,12,10]

const isDivisbleBy3 = myEvery(array, function(ele, array){
    return ele % 3 == 0
})

console.log(isDivisbleBy3) // Should return false