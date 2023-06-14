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