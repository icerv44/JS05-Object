let val;
let i = 1;
let sumValue = {};
do {
  val = prompt("Enter Value1");
  console.log(val);

  sumValue[i] = val;

  i++;
  console.log(sumValue);
} while (val !== "stop");
