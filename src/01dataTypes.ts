// Boolean: Represents a logical value, true or false.
let isCompleted: boolean = true;

// Number: Represents numeric values, including integers and floating-point numbers.
let age: number = 30;
let pi: number = 3.14;

// String: Represents textual data, enclosed within single or double quotes.
let fullName: string = "John Doe";

// Array: Represents a collection of elements of the same type.
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "orange"];

// Tuple: Represents an array with fixed number of elements where each element may be of a different type.
let person: [string, number] = ["John", 30];

// Enum: Represents a set of named constants.
enum Color {
  Red,
  Green,
  Blue,
}
let selectedColor: Color = Color.Red;

// Any: Represents a value of any type. Use of any should be minimized.
let dynamicValue: any = 10;
dynamicValue = "Hello";

// Void: Represents the absence of any type. Typically used as the return type of functions that do not return a value.
function greet(): void {
  console.log("Hello!");
}

// Null and Undefined: Represents null or undefined values.
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Object: Represents a non-primitive type, i.e., anything that is not number, string, boolean, symbol, null, or undefined.
let obj: object = { name: "John", age: 30 };
