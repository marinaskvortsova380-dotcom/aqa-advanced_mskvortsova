const car1 = {
    brand: "Lamborgini",
    model: "Cutie",
    year: 2027,
}
const car2 = {
    brand: "Ferrari",
    model: "Pink",
    owner: "Barbie",
};

const car3 = { ...car1, ...car2 };

console.log(car3);  