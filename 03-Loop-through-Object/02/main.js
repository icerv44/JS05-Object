let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

let multiplyNumeric = (obj, num) => {
  for (let key in obj) {
    console.log("key " + key);
    console.log("Obj " + obj[key]);
    if (isNaN(obj[key])) {
    } else {
      obj[key] = obj[key] * num;
    }
  }
  return console.log(obj);
};

multiplyNumeric(menu, 3);
