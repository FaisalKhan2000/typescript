// Define an array of numbers using square brackets notation.
const numberArray: number[] = [12, 24, 36, 48];

// Define an array of strings using square brackets notation.
const fruitArray: string[] = ["apple", "banana"];

// Define an array of strings using Array generic notation.
const nameArray: Array<string> = ["john", "jane"];

// Define an array of booleans using Array generic notation.
const booleanArray: Array<boolean> = [true, false, false];

// Define an array of strings or numbers using Array generic notation with union type.
const mixedArray: Array<string | number> = [1, 2, 3, "4"];

// Output the arrays to the console.
console.log(numberArray);
console.log(fruitArray);
console.log(nameArray);
console.log(booleanArray);
console.log(mixedArray);
