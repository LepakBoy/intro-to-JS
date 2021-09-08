let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// SPREAD OPERATOR ==========================================================
const data2 = { ...data, name: "ahmad fikri", email: "fikrinadzif35@gmail.com", hobby: "main game" };
console.log(data2);

// DESTRUCTURING ==========================================================
//Qa: apakah bisa mengganti nama variabelnya ? (street, city)
//A: cara ganti nama variable dengan tambah titik 2 (:)
const { street: jalan, city } = data.address;
console.log(`beralamat di jalan '${jalan}', '${city}'`);
//Q: apakah bisa ganti value yang bertipe number?
//Q: apakah bisa ganti value dengan destructuring?
// const { suite: "awokawo" } = data.address;
// console.log(suite);
