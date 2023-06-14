//
// The function myMap takes an array and a callback function as its parameters and 
// returns a new array containing the elements of the array modified by the callback function.
// The new array is returned when all the elements have been processed.
// A crucial aspect of the map function is that the original array is not altered. 
// By applying the callback function to each element of the corresponding input array element,
// the myMap function converts an input array into a new output array.

function myMap(array, callback){
    let result = []
    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i], array))
    }
    return result
}

const arr = [1,2,3,4,5,6]
let plusOne = []
plusOne = myMap(arr, function(value, arr){
    return value+1
})

console.log(plusOne)