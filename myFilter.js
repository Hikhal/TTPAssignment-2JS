// The myFilter function is a custom implementation of the filter method provided in JavaScript.
// It takes an array and a callback function as its parameters. 
// The function iterates over each element in the array and applies the callback function to it.
// If the callback function returns true for a particular element, that element is added to a new array.
// After all elements have been processed, the new array is returned.
// The original array is not modified by the function.

function myFilter(array, callback){
    let result = []

    for(let i = 0; i < array.length; i++){
        if(callback(array[i], array)){
            result.push(array[i])
        }
    }
    return result
}

const arr = [1,2,3,4,5,6,7,8]

const evenNo = myFilter(arr, function(ele, arr){
   return ele % 2 == 0
})

console.log(evenNo)