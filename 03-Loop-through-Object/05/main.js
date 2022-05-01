let fruits = {};

document.getElementById("submit").onclick = function () {
  var KeyV = document.getElementById("KeyV").value;
  var ValueV = document.getElementById("ValueV").value;

  console.log(KeyV);
  console.log(ValueV);
  if (ValueV > 1) {
    KeyV = KeyV + "s";
  }
  fruits[KeyV] = ValueV;

  console.log(fruits);

  let outext = "";
  for (let x in fruits) {
    outext = outext + x + " : " + fruits[x] + "<br>";
  }
  document.getElementById("outText").innerHTML = outext;
};
