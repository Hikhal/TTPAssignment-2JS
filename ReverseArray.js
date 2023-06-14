// The ReverseArray function takes an array as input and returns a new array with the elements in reverse order.
// It initializes an empty array called 'reversed' to store the reversed elements.
// The function iterates over the original array in reverse order using a for loop.
// Inside the loop, each element from the original array is assigned to the corresponding index in the 'reversed' array using the 'j' variable.
// The 'j' variable is incremented after assigning the element to ensure the elements are placed in the correct order.
// Finally, the 'reversed' array is returned.

function ReverseArray(arr){
    const reversed = []
    let j = 0
    for(let i = arr.length-1; i>=0; i--){
        reversed[j++] = arr[i]
        
    }
    return reversed
}

const arr = ['A', 'B', 'C']
const reversedArr = ReverseArray(arr)
console.log(reversedArr)