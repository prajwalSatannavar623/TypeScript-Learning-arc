// defining a literal object
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Masala",
  price: 23,
  isHot: true,
};

// using the type:
type Tea = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[]; // array of strings
};

const anotherTea: Tea = {
  name: "masala",
  price: 24,
  isHot: true,
  ingredients: ["123", "21"],
};

//duck typing:
type Cup = {
  size: string;
};

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "200", material: "steel" };

// is valid as the bare minimum for smallCup is staisfied
smallCup = bigCup;

// using types inside types:
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// Partial

type Chai = {
  name: string;
  price: number;
  flavour: "vanilla" | "straberry" | "filter tea";
};

// partially implementing a type:
const updateChai = (updates: Partial<Chai>) => {
  console.log("Updaing the chai with updates:", updates);
};

// updateChai({}) // U can do this here

// but keep it mind that u can pass the empty object too as everything is optional

// required

type Chai2 = {
  name?: string;
  price?: number;
  flavour?: string;
};

const updateChai2 = (updates: Required<Chai2>) => {
  console.log("Updating chai with updates : ", updates);
};

// updateChai2({}); // U cant do this here, all fields are required even if they are optional declared indide the type

// Pick

type Chai3 = {
  name: string;
  price: number;
  ingredients: string[];
};

const updateChaiNameAndPrice = (updates: Pick<Chai3, "name" | "price">) => {
  console.log(`Updating the chai with name and price here`, updates);
};

// similarly there exits Omit, search and see
