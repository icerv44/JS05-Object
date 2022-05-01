function Accumulator(startingValue) {
  this.currentValue = startingValue;

  this.Read = function (a) {
    this.currentValue += a;
  };
  this.Show = function () {
    console.log(this.currentValue);
  };
}

let getValue = new Accumulator(5);

getValue.Read(10);
getValue.Show();
