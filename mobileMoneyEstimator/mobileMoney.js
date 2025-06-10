// mobilemoney.js - Mobile Money Fee Estimator (Node.js version)

const readline = require("readline");

function estimateTransactionFee(amountToSend) {
  const feePercent = 0.015;
  let calculatedFee = amountToSend * feePercent;

  // Ensure fee is between 10 and 70
  calculatedFee = Math.max(10, Math.min(calculatedFee, 70));
  const totalAmount = amountToSend + calculatedFee;

  // Output results
  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}`);
  console.log("Send Money Securely!");
}

// Setup CLI input using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Unatuma Ngapi? (KES): ", function (input) {
  const amount = Number(input);
  if (isNaN(amount) || amount <= 0) {
    console.log("Tafadhali andika kiasi halali (Please enter a valid amount).");
  } else {
    estimateTransactionFee(amount);
  }
  rl.close();
});
