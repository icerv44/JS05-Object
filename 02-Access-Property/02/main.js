let test1 = {};
let test2 = { user: "Name" };

isEmptry = (obj) => {
  return Object.keys(obj).length === 0;
};

console.log(isEmptry(test1));
console.log(isEmptry(test2));
