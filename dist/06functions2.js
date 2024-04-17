"use strict";
// Function to log data of a product passed as an object parameter.
const getData = (product) => {
    console.log(product);
};
// Function similar to getData but using GetDataType type for parameter annotation.
const getData2 = (product) => {
    console.log(product);
};
// Define a product object using the Product interface.
const productOne = {
    name: "Macbook",
    stock: 46,
    price: 999999,
    photo: "samplePhotoUrl",
    id: 69,
};
// Function returning never type, throwing an error.
const errorHandler = () => {
    throw new Error();
};
// Function returning Error type.
const errorHandler2 = () => {
    return new Error();
};
// Define a variable for theme mode.
const theme = "dark";
console.log(theme);
// Call functions to log product data.
getData(productOne);
getData2(productOne);
