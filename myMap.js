

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