// bodaFare program
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

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(input));

// done