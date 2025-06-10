// chai.js - Node.js compatible version
const readline = require("readline");

function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200; // ml
  const milk = numberOfCups * 50; // ml
  const teaLeaves = numberOfCups; // 1 tablespoon per cup
  const sugar = numberOfCups * 2; // 2 teaspoons per cup

  // output results
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log("Enjoy your Chai Bora!");
}

// Setup CLI input using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Karibu! How many cups of Chai Bora would you like to make? ", function (input) {
  const cups = Number(input);
  if (isNaN(cups) || cups <= 0) {
    console.log("Tafadhali andika nambari halali (Please enter a valid number).");
  } else {
    calculateChaiIngredients(cups);
  }
  rl.close();
});
