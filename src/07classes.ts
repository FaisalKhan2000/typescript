class Player {
  public readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = String(Math.random() * 100);
  }

  // getHeight = () => this.height;

  get getHeight(): number {
    return this.height;
  }

  set changeHeight(height: number) {
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

  constructor(
    height: number,
    weight: number,
    power: number,
    public special: boolean
  ) {
    super(height, weight, power);
    this.special = special;
  }

  getMyPower = () => this.power;
}

const faisal2 = new Player2(100, 150, 23, true);
console.log(faisal2.weight);
console.log(faisal2.getHeight);
console.log(faisal2.getMyPower());
console.log(faisal2.special);

interface ProductType {
  name: string;
  price: number;
  stock: number;
  _id: number;
  offer?: boolean;
}

interface IdInterface {
  id: () => number;
}

class Product1 implements ProductType, IdInterface {
  _id: number;

  public id(): number {
    return this._id;
  }

  constructor(public name: string, public price: number, public stock: number) {
    this._id = Math.floor(Math.random() * 1000);
  }
}

const product = new Product1("macbook", 2000, 23);
console.log(product);
console.log(product.id());
