// Define an interface for products with properties: name, stock, price, photo (optional), and id (readonly).
interface Product {
  name: string;
  stock: number;
  price: number;
  photo?: string;
  readonly id: number;
}

// Define a type for a function that accepts a Product parameter and returns void.
type GetDataType = (product: Product) => void;

// Define a type for theme mode, which can be either "light" or "dark".
type themeMode = "light" | "dark";

// Function to log data of a product passed as an object parameter.
const getData = (product: {
  name: string;
  stock: number;
  price: number;
  photo?: string;
  readonly id: number;
}): void => {
  console.log(product);
};

// Function similar to getData but using GetDataType type for parameter annotation.
const getData2: GetDataType = (product) => {
  console.log(product);
};

// Define a product object using the Product interface.
const productOne: Product = {
  name: "Macbook",
  stock: 46,
  price: 999999,
  photo: "samplePhotoUrl",
  id: 69,
};

// Function returning never type, throwing an error.
const errorHandler = (): never => {
  throw new Error();
};

// Function returning Error type.
const errorHandler2 = (): Error => {
  return new Error();
};

// Define a variable for theme mode.
const theme: themeMode = "dark";
console.log(theme);

// Call functions to log product data.
getData(productOne);
getData2(productOne);
