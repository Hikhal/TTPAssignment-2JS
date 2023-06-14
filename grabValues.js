// The grabValues function is a custom implementation of retrieving all the values of an object in JavaScript without using the native Object.values method.
// It takes an object as a parameter and uses a for...in loop to iterate over the object's properties.
// The function checks if each key belongs to the object itself (not inherited from the prototype chain) using hasOwnProperty.
// If the key belongs to the object, it accesses the corresponding value using the key and adds it to the values array.
// The values array is then returned, containing all the values of the object.

function grabKeys(obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(obj[key]);
    }
    return keys;
  }
  
  const person = {
    name: "John",
    age: 30,
    gender: "Male",
    profession: "Developer"
  };
  
  const keys = grabKeys(person);
  console.log(keys); // Output: ["name", "age", "gender","profession"]
  