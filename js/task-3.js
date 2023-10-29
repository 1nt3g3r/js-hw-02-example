function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
}
