// The myIndexOf function is a custom implementation of the Array.prototype.indexOf method provided in JavaScript.
// It takes an array and a callback function as parameters.
// The function iterates through each element in the array and applies the callback function to it.
// If the callback function returns true for any element, myIndexOf immediately returns the index of that element at the index it was first found at.
// If the callback function returns false for all elements, myIndexOf returns -1 to indicate the element was not found.
// The original array is not modified by the function.

// In the provided example, the array is ["BMW", "Mercedes", "Volvo", "Toyota", "Mercedes"].
// The myIndexOf function is called with the array and a callback function that checks if an element is equal to "Mercedes".
// The callback function returns true when it finds the element "Mercedes" at index 1.



function myIndexOf(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return i
        }
    }
    return -1
}

const array = ["BMW", "Mercedes", "Volvo", "Toyota", "Mercedes"]

const indexOfMercedes= myIndexOf(array, function(ele, index, array){
    return ele == "Mercedes"
})

console.log(indexOfMercedes) // Should return 1