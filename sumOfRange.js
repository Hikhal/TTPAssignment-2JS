// The `range` function takes two arguments, start and end, and returns an array of numbers from start to end, inclusive.
// It creates an empty array, then uses a for loop to add each number in the range to the array.
// The `sum` function takes an array of numbers and returns the sum of the numbers.
// It initializes a `total` variable to 0, then uses a for-of loop to add each number in the array to `total`.

function range(start, end) {
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

function sum(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(range(1, 10))); // should output 55
