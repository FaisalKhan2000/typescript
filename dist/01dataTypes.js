"use strict";
// Boolean: Represents a logical value, true or false.
let isCompleted = true;
// Number: Represents numeric values, including integers and floating-point numbers.
let age = 30;
let pi = 3.14;
// String: Represents textual data, enclosed within single or double quotes.
let fullName = "John Doe";
// Array: Represents a collection of elements of the same type.
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
// Tuple: Represents an array with fixed number of elements where each element may be of a different type.
let person = ["John", 30];
// Enum: Represents a set of named constants.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Red;
// Any: Represents a value of any type. Use of any should be minimized.
let dynamicValue = 10;
dynamicValue = "Hello";
// Void: Represents the absence of any type. Typically used as the return type of functions that do not return a value.
function greet() {
    console.log("Hello!");
}
// Null and Undefined: Represents null or undefined values.
let nullValue = null;
let undefinedValue = undefined;
// Object: Represents a non-primitive type, i.e., anything that is not number, string, boolean, symbol, null, or undefined.
let obj = { name: "John", age: 30 };
