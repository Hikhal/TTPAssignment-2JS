// The mySome function is a custom implementation of the Array.prototype.some method provided in JavaScript. 
// It takes an array and a callback function as parameters. 
// The function iterates over each element in the array and applies the callback function to it.
// If the callback function returns true for any element in the array, mySome immediately returns true. 
// If the callback function never returns true (i.e., it returns false for all elements), mySome returns false.
// The original array is not modified by the function.

function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], arr)){
            return true
        }
    }
    return false
}

const array = [2,4,6,8,10]

const hasOddNumber = mySome(array, function(ele, array){
    return ele % 2 != 0
})

console.log(hasOddNumber) // Should return false since there is no Odd number in the array.