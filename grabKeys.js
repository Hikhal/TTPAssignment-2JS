// The grabKeys function is a custom implementation of retrieving all the keys of an object in JavaScript without using the native Object.keys method.
// It takes an object as a parameter and uses a for...in loop to iterate over the object's properties.
// The function checks if each key belongs to the object itself (not inherited from the prototype chain) using hasOwnProperty.
// If the key belongs to the object, it is added to the keys array.
// The keys array is then returned, containing all the keys of the object.

function grabKeys(obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(key);
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
  