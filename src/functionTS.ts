function makeChai(type: string, cups: number): string {
  console.log(`Making ${cups} of ${type} chai`);
  return `Making ${cups} of ${type} chai`;
}

makeChai("Masala", 2);

// default and optional can also be defined as:
function makingChai(type: string = "Masala"): string {
  return `Made a chai of type: ${type}`;
}

// if function isnt returning anything:
function returnNothing(input: string): void {
  console.log("Use such functions for logging/ logger");
}
