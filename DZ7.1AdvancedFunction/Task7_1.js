function handleNumber(num, evenCallback, oddCallback) {
  if (num % 2 === 0) {
    evenCallback(num);
  } else {
    oddCallback(num);
  }
}
function handleEven(num) {
  console.log(`number ${num} is even`);
}
function handleOdd(num) {
  console.log(`number ${num} is odd`);
}

handleNumber(100, handleEven, handleOdd);
