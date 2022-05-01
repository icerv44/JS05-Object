let calculator = {
  // ... your code ...
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(3, 4);
alert(calculator.sum());
alert(calculator.mul());
