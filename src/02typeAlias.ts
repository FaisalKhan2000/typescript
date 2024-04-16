// Define a custom type 'numbers' which represents a function that takes two numbers and returns a number.
// type alias
type numbers = (n: number, m: number) => number;

const add: numbers = (n, m) => {
  console.log(n, m);

  return n + m;
};

console.log(add(2, 3));
