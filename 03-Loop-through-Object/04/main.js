let val;
do {
  let i = 1;
  val = prompt("Enter Value1");
  console.log(val);
  let sumValue = {};
  sumValue[i] = val;

  i++;
  console.log(sumValue);
} while (val !== "STOP");
