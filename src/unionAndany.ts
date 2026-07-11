let subs: number | string = 10; // "10 is also accepted"

// actual use case:
let apiRequest: "pending" | "success" | "error" = "pending";

// apiRequest = "hello"; // Not allowed

// avoidng any->
let orders = [1, 2, 3, 4, 5, 6];

let currentOrder: number | undefined;

for (let order of orders) {
  if (order == 1) {
    currentOrder = order;
  }
}

console.log(currentOrder);
