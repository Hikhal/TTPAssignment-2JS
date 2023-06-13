
// This function uses the forEach method of JS Arrays and multiplies each element inside the array by two

function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const arr = [1, 2, 3, 4, 5];

myEach(arr, function(value, index,  array) {
    console.log('Element at index ' + index + ' multiplied by 2 = ' + value * 2);
});
