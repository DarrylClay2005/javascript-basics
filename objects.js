const person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
// Access properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Modify properties
person.isStudent = false; // Dot notation
person["name"] = "Bob"; // Bracket notation

console.log(person);

const property = "age";
console.log(person[property]);