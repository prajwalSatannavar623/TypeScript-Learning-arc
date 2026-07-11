// types vs interfaces:

// define the types if they are being used in more than one functions or places
type Chai = {
  type: string;
  sugar: number;
  strong: boolean;
};

function MakeChai(order: Chai) {
  console.log(order);
}
function ServeChai(order: Chai) {
  console.log(order);
}

// declare another type:
type TeaRecipe = {
  water: number;
  milk: number;
};

// valid
class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 100;
}

// declare interface
interface cupSize {
  size: "small" | "large";
}

class Chais implements cupSize {
  size: "small" | "large" = "small";
}

//Note:  Always try to implement class from interface rather than type

// similar to union, we can have intersections too

// union example
type A = "A" | "B" | "C";

// intersection example
type D = {
  type: number;
};
type E = {
  type: number;
};

// defining the intersectionss
type F = E & D;

// optionals
type Profile = {
  name: string;
  bio?: string; // if it has, it will be string else its nothing
};

// read only mode:
type config = {
  readonly appName: string;
  version: number;
};

let cfg: config = {
  appName: "Hotelyzis",
  version: 12,
};

// cfg.appName = "abc"; // U cant be doin this
