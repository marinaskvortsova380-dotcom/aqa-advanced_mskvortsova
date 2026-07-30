const users = [
  { name: "Lara", email: "larusik@gmail.com", age: 25 },
  { name: "Sylwestr", email: "stalon@gmail.com", age: 30 },
  { name: "Lilu", email: "lilu@gmail.com", age: 28 },
];

for (const { name, email, age } of users) {
  console.log(`${name} has email:${email} and ${age} years old`);
}
