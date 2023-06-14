

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
  