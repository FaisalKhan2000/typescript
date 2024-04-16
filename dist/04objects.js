"use strict";
// Object using inline type annotation
const obj1 = {
    height: 5.1,
    weight: 90,
    gender: true,
};
// Object using interface
const obj2 = {
    height: 5.5,
    weight: 55,
    gender: false,
};
// Object using type alias
const obj3 = {
    height: 5.1,
    weight: 70,
};
// Object extending an interface
const obj4 = {
    height: 5.1,
    weight: 70,
    gender: true,
    scholar: true,
    func: (n, m) => {
        console.log(n * m);
    },
};
// Another object with the same extended interface
const obj5 = {
    height: 5.1,
    weight: 70,
    gender: true,
    scholar: true,
    func: (n, m) => {
        console.log(n * m);
    },
};
// Calling the function property of obj5
obj5.func(20, 40); // Outputs: 800
