"use strict";
// Function to multiply two numbers and return the result.
const func1 = (n, m) => {
    return n * m;
};
// Function using optional parameters to multiply numbers.
const func2 = (a, b, c) => {
    // Using type guard to check if the third parameter is provided.
    if (typeof c === "undefined")
        return a * b;
    return a * b * c;
};
// Function similar to func2 but returning a string if the third parameter is not provided.
const func3 = (a, b, c) => {
    // Using type guard to check if the third parameter is provided.
    if (typeof c === "undefined")
        return "c was not provided";
    return a * b * c;
};
// Function using a default value for the third parameter.
const func4 = (a, b, c = 20) => {
    return a * b * c;
};
// Function with type annotations for parameters and a default value for the third parameter.
const func5 = (a, b, c = 20) => {
    return a * b * c;
};
// Function using the rest parameter to accept any number of arguments and return them in an array.
const func6 = (...m) => {
    return m;
};
// Similar to func6 but using Array<number> instead of number[] for type annotation.
const func7 = (...m) => {
    return m;
};
// Function accepting any number of parameters and returning them in an array,
// using Func2 type annotation.
const func8 = (...m) => {
    return m;
};
// Test calls for each function.
console.log(func1(2, 3));
console.log(func2(2, 3));
console.log(func2(2, 3, 4));
console.log(func3(2, 3));
console.log(func4(2, 3));
console.log(func5(2, 3));
console.log(func6(2, 3, 5, 6, 6, 7));
console.log(func7(2, 3, 5, 6, 6, 7));
console.log(func8(2, 3, 5, 6, 6, 7));
