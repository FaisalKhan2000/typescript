// Type Assertion

const btn1 = document.getElementById("btn") as HTMLElement;
const btn2 = <HTMLElement>document.getElementById("btn");
const btn3 = document.getElementById("btn")!;

const image1 = document.getElementById("img") as HTMLImageElement;

// const image2 = document.querySelector("img")!;
const image2 = document.querySelector("img") as HTMLImageElement;

btn1.onclick;
btn2.onclick;
btn3.onclick;

image1.src;
image2.src;
