// Type alias for an object
type Obj1 = {
  height: number;
  weight: number;
  gender?: boolean; // Optional property
};

// Interface for an object
interface Obj2 {
  height: number;
  weight: number;
  gender: boolean;
}

// Type alias for a function
type FuncType = (n: number, m: number) => void;

// Extending an interface
interface NewObj extends Obj2 {
  scholar: boolean;
  func: FuncType;
}

// Object using inline type annotation
const obj1: {
  height: number;
  weight: number;
  gender: boolean;
} = {
  height: 5.1,
  weight: 90,
  gender: true,
};

// Object using interface
const obj2: Obj2 = {
  height: 5.5,
  weight: 55,
  gender: false,
};

// Object using type alias
const obj3: Obj1 = {
  height: 5.1,
  weight: 70,
};

// Object extending an interface
const obj4: NewObj = {
  height: 5.1,
  weight: 70,
  gender: true,
  scholar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

// Another object with the same extended interface
const obj5: NewObj = {
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
