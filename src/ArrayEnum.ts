// declaring arrays:

const arr1: string[] = ["1", "2"];
const arr2: number[] = [1, 2];

// other way
const arrr3: Array<number> = [1, 2, 3];

// u can have aray of custom types tooo:
type data = {
  name: string;
  age: number;
  profession: "engineer" | "doctor";
};

const Profile: Array<data> = [
  { name: "Prajwal", age: 23, profession: "engineer" },
];

// or can alos be declared as:
const Profile2: data[] = [];

// to make readOnly arrays:
const readOnlyArray: readonly string[] = ["prajwal", "vaibhaw", "aniket"];

// multi-dimension arrays:
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// defining a tuple:
const ProfileTuple: [string, number, boolean?] = ["Prajwal", 22]; // here third arg is optional
// u can still update this tuple
// U can also define the readonly tuples

// named tuples:
const namedProfile: readonly [name: string, age: number] = ["Prajwal", 23];

//enums:
//defining the enums:
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.SMALL;

// descrepency
enum Status {
  PENDING = 100,
  SERVED, // this has got incremental 101 value
  CANCELLED, // this has got incremental 102 value
}

// note: if we define some string, then its ok

// we can also define the const enums: --> Rarely used
const enum SugarLevel {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
