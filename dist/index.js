"use strict";
const func1 = (n, m) => {
    return n * m;
};
const func2 = (a, b, c) => {
    // using typeguard for optional params
    if (typeof c === "undefined")
        return a * b;
    return a * b * c;
};
console.log(func1(2, 3));
console.log(func2(2, 3));
console.log(func2(2, 3, 4));
