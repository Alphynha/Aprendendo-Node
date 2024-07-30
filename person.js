class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hoy, ${this.name} on!`;
  }
}

module.exports = {
  Person,
};
