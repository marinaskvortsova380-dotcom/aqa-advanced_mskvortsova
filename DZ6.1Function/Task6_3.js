function checkOrder(avaliable, ordered) {
  if (avaliable < ordered) {
    return "Your order is too large, we don't have enough goods";
  }
  if (ordered === 0) {
    return "Your order is empty";
  }
  return "Your order is accepted";
}

console.log(checkOrder(49, 50));
console.log(checkOrder(50, 40));
console.log(checkOrder(50, 0));
