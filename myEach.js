


function myEach(array, callback) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += callback(array[i], array[i+1]);
    }
    return total
}

const arr = [1, 2, 3, 4, 5];

let sum = myReduce(arr, function(curr, next) {
    return curr+next
});

console.log(sum)