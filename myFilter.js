


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