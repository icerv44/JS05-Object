const product1 = {
  name: "Water",
  distributor: {
    name: "Giraffe Water Company",
    address: {
      street: "Phetchaburi",
      subdistrict: "Thanonphetchaburi",
      district: "Ratchathewi",
      province: "Bangkok",
    },
  },
};

console.log(product1.distributor.address.province);

const product2 = {};
product2.distributor = {};
product2.distributor.address = {};
product2.distributor.address.province = "Bangkok";
console.log(product2.distributor.address.province);
