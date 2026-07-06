function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log("Результат для 25:", isAdult(25)); // true
console.log("Результат для 15:", isAdult(15)); // false