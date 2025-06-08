// mobile money estimator program
function estimateTransactionFee(amountToSend) {
  const feePercent = 0.015;
  let calculatedFee = amountToSend * feePercent;

  // Ensure fee is between 10 and 70
  calculatedFee = Math.max(10, Math.min(calculatedFee, 70));
  const totalAmount = amountToSend + calculatedFee;


  // output results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}`);
  console.log("Send Money Securely!");
}

const input = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(input));
