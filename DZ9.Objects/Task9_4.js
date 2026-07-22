const person = {
    firstName: "Lara",
    lastName: "Croft",
    age: 25,
};

person.email = "larusik@gmail.com";
console.log(person);

delete person.age;

console.log(person);
