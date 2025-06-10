// bodaFare program (Node.js version)
const readline = require("readline");

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const perKmCharge = 15;
  const totalFare = baseFare + (distanceInKm * perKmCharge);

  // output
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * perKmCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

// Setup input from the terminal using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", function (input) {
  const distance = Number(input);
  if (isNaN(distance)) {
    console.log("Tafadhali andika nambari halali (valid number).");
  } else {
    calculateBodaFare(distance);
  }
  rl.close();
});

// done