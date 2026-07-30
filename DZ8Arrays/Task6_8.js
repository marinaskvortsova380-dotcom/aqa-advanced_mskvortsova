const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const sameNumbersList = numbersList.map(function (num) {
  return num;
});
sameNumbersList.sort(function (a, b) {
  return a - b;
});
console.log(sameNumbersList);
