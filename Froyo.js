const userInput = prompt(
  " Choose your Froyo flavors.",
  " Vanilla, Vanilla, Vanilla, Strawberry, Coffee, Coffee"
);
typeof userInput === "string";
const flavors = userInput.split(",");
const flavorcount = (arr) => {
  const obj = {};
  for (const flavor of arr) {
    if (flavor in obj) {
      obj[flavor] += 1;
