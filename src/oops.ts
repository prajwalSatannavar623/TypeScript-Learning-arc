class Chai {
  flavour: string;
  price: number;
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChia = new Chai("masala", 20);

// access modifier:
class Chai2 {
  public flavour: string = "Masala"; // class, inherited class, instances
  private secreteIngredients: string = "Cardamom"; //only inside this class

  protected shopName: string = "Chai corner"; // this class and its subclasses and not instances

  // method to access the private variable:
  reveal() {
    return this.secreteIngredients;
  }
}

class SubChai extends Chai2 {
  getShopName() {
    return this.shopName; // ok
  }
}

const subChai = new SubChai();
subChai.getShopName(); // allowed
subChai.reveal(); // allowed
// subChai.shopName --> not allowed
// subChai.secreteIngredients --> not allowed

const chai = new Chai2();

// readyonly feature can be used to the attributes of the classes too

// use the getter and setter for private attribute

// static key word:-> if declared, only accessable via class itself, not via instance

// abstract classes

// its just like the interfaces and there will be concrete implementation from the class that inherit this class
abstract class drink {
  abstract make(): void;
}

// note: the abstract things must be implemented by the extended class compulsorily

//------------
// composition: --> class takes class as parameter
class Heater {
  heat() {
    console.log("Heat");
  }
}

class ChaiMaker {
  constructor(private heater: Heater) {} // it recieves the Heater class object

  make() {
    this.heater.heat();
  }
}

const heater1 = new Heater();

const chaiMaker1 = new ChaiMaker(heater1);
