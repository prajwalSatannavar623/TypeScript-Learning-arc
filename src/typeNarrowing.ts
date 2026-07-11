// explictly split the type to get the correct sugesstions for the desired type
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return ` <sking ${kind} of chai`;
  }
  return `Chai order no : ${kind}`;
}

function serveChai(message?: string) {
  // here, we are making message to be received optional

  // here also we are doing the Type narrowing: best practices
  if (message) {
    return `The message received is : ${message}`;
  }
  return ` Message wasnt received`;
}

// Building our own type:
type ChaiFlavor = {
  type: string;
  sugar: number;
};

// is to check that the input obj holds the structure if type or not:
function isChaiOrder(obj: unknown): obj is ChaiFlavor {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "type" in obj &&
    "sugar" in obj &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveChais(item: ChaiFlavor | string) {
  if (isChaiOrder(item)) {
    return `Serveing chai with ${item.type} and sugar: ${item.sugar}`;
  }
  return `Serving custom chai: ${item}`;
}

// defining the custom types:
type MasalaChai = {
  type: "malasa";
  spiceLevel: number;
};

type CardamomChai = {
  type: "Cardamom";
  amount: number;
};

type KashayaChai = {
  type: "kashaya";
  amount: number;
};

type Chai = MasalaChai | CardamomChai | KashayaChai;

// after that we no need to check for the chai type inside
function MakeChai(chai: Chai) {
  switch (chai.type) {
    case "Cardamom":
      return `Serveing ${chai.type} chai with ${chai.amount} amount of cardomom`;
    case "kashaya":
      return `Serving the ${chai.type} with ${chai.amount} fo kashaya`;
    case "malasa":
      return `Serving ${chai.type} chai with ${chai.spiceLevel} fo spice Level`;
    default:
      // This is a great place to handle cases you didn't expect
      const _exhaustiveCheck: never = chai;
      return _exhaustiveCheck;
  }
}
