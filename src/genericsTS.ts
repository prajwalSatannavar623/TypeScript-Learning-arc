// <T> acts as a placeholder for whatever type is passed in
function getArrayItem<T>(items: T): T[] {
  return [items];
}

//
const firstNumber = getArrayItem(22);
const firstString = getArrayItem("Prajwal");

// another example:
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

//------------------------------------------

// using both interfaces and generics:
interface ApiResponse<T> {
  status: number;
  errorMessage?: string;
  data: T;
}

interface User {
  id: string;
  username: string;
}

interface Product {
  id: string;
  price: number;
}

// Usage:
const userResponse: ApiResponse<User> = {
  status: 200,
  data: { id: "u123", username: "prajwal_dev" },
};

const productResponse: ApiResponse<Product> = {
  status: 200,
  data: { id: "p99", price: 500 },
};
