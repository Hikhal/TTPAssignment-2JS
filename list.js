// This function converts an array into a list
// It starts from the end of the array and iterates backwards
// For each element, it creates an object where the `value` is the array element
// and `rest` is the previously created object.
// This effectively creates a linked list in reverse order of the array.


function arrayToList(arr) {
    let object = null;
  
    for (let i = arr.length - 1; i >= 0; i--) {
      object = { value: arr[i], rest: object };
    }
  
    return object;
  }
  
  console.log(arrayToList([2,4,6,7,8,9]))

// This function converts a list into an array
// It starts with an empty array and iterates over the list until it's null
// For each iteration, it pushes the `value` from the list into the array
// and then moves to the next object in the list by assigning `obj` to `obj.rest`.
// The result is an array in the same order as the list.

  function listToArray(obj) {
    const result = [];
    while (obj !== null) {
      result.push(obj.value);
      obj = obj.rest;
    }
    return result;
}

const list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

  console.log(listToArray(list));  // Expected output: [1, 2, 3]

  // prepend func
  function prepend(element, list) {
    if(element === null || element === undefined) {
      throw new Error('Element cannot be null or undefined');
    }
    return { value: element, rest: list };
  }
  

  // nth func
 // nth: This function takes a list and an index and
 // returns the value of the element at the given index in the list, or undefined if there is no such element.
 // It's implemented using recursion: if the index is 0, it returns the value of the current element; otherwise, it calls itself with list.rest and index - 1.

 
  function nth(list, index) {
    if (typeof index !== 'number' || index < 0 || Math.floor(index) !== index) {
      throw new Error('Index must be a non-negative integer');
    }
    
    if (!list) {
      return undefined;
    } else if (index === 0) {
      return list.value;
    } else {
      return nth(list.rest, index - 1);
    }
  }
  