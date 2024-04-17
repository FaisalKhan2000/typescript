"use strict";
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    // getHeight = () => this.height;
    get getHeight() {
        return this.height;
    }
    set changeHeight(height) {
        this.height = height;
    }
}
const faisal = new Player(178, 90, 1);
console.log(faisal);
console.log(faisal.getHeight);
console.log(faisal.id);
faisal.changeHeight = 180;
console.log(faisal.getHeight);
class Player2 extends Player {
    // public special;
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const faisal2 = new Player2(100, 150, 23, true);
console.log(faisal2.weight);
console.log(faisal2.getHeight);
console.log(faisal2.getMyPower());
console.log(faisal2.special);
class Product1 {
    id() {
        return this._id;
    }
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this._id = Math.floor(Math.random() * 1000);
    }
}
const product = new Product1("macbook", 2000, 23);
console.log(product);
console.log(product.id());
