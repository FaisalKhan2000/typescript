type Func = (n: number, m: number, l?: number) => number;

const func1 = (n: number, m: number): number => {
  return n * m;
};

const func2: Func = (a, b, c) => {
  // using typeguard for optional params
  if (typeof c === "undefined") return a * b;
  return a * b * c;
};

console.log(func1(2, 3));
console.log(func2(2, 3));
console.log(func2(2, 3, 4));
