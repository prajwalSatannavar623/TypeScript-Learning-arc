// forcefull type assertion:
let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString: string = '{"name": "who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book; // forceful type assertion

console.log(bookObject.name);

// some other type assertions:
const inputElement = document.getElementById("username") as HTMLInputElement;
