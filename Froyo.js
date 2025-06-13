const userInput = prompt(
  " Choose your Froyo flavors.",
  " Vanilla, Vanilla, Vanilla, Strawberry, Coffee, Coffee"
);
typeof userInput === "string";
const flavors = userInput.split(",");

