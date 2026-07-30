function handleNumber(num, evenCallback, oddCallback) {
  if (num % 2 === 0) {
    evenCallback(num);
  } else {
    oddCallback(num);
  }
}
function handleEven() {
  console.log("number is even");
}
function handleOdd() {
  console.log("number is odd");
}

handleNumber(100, handleEven, handleOdd);
