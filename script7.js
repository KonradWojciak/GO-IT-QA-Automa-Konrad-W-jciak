// klasa model dziedziczy extends z CAR
// car jest przodkiem

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    /// konstruktor musi zawierać wszystkie elementy przodka
    super(brand); // super klasa to pierwotna z ktorej dziedziczymy czyli car
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
