const sun = (a, b) => a + b;
sun(1, 2);

class Hero {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.name = newName;
  }
}

const h = new Hero(`mango`);
