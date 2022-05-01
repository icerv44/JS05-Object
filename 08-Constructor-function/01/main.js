function Read(a, b) {
  this.a = a;
  this.b = b;
  this.Sum = function () {
    return this.a + this.b;
  };
  this.Mul = function () {
    return this.a * this.b;
  };
}

let Calculator = new Read(3, 4);

console.log(Calculator.Sum());
console.log(Calculator.Mul());
