// The function `moveZeros` manipulates an array in-place to move all zero values to the end,
// while preserving the original order of the non-zero elements.
// A pointer `pos` is used to track the next position where a non-zero value should be placed.
// The function iterates over the array, and when a non-zero value is found, it swaps this value 
// with the value at the position `pos`, then increments `pos`.
// At the end of the iteration, all zero values are moved to the end of the array, 
// and the original order of the non-zero elements is preserved.

function moveZeros(nums) {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap nums[i] and nums[pos]
            let temp = nums[i];
            nums[i] = nums[pos];
            nums[pos] = temp;
            pos++;
        }
    }
}

let nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums); // should print: [1, 3, 12, 0, 0]

