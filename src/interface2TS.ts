interface Chai {
  flavour: string;
  (price: number): number;
}

// object implementing the interface
const c: Chai = Object.assign(
  (price: number) => price * 1.2, // The function part
  { flavour: "masala" }, // The object property part
);

// methods can be implemented this way too --> more common approach
interface Chai1 {
  name: string;
  start(): void;
  stop(time: number): string;
}

// object implementing interface
const c1: Chai1 = {
  name: "Prajwal",
  start() {
    console.log("Starting");
  },
  stop(time: number) {
    console.log("Stopping");
    return `Stopping`;
  },
};

// interface implementing the interfaces
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}

// more than one interface is allowed:
interface Prajwal {
  name: string;
}

interface Prajwal {
  age: number;
}

// in must implement all the definations
const prajwal: Prajwal = {
  name: "prajwal",
  age: 22,
};

// Note:  interfaces used to implement the classes also but avoid using that, instead use the abstract classes to do that
