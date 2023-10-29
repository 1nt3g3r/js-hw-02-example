function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = pricePerDroid * orderedQuantity;

  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
