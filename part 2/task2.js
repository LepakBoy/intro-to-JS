const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

// let filter = "ca";
// let filteredName = name.filter((x) => {
//   return x.toLowerCase().includes(filter); // atau includes(filter.toLowerCase());
//   //x.toLowerCase() = untuk menjadikan smua string mnjadi string sehingga termasuk dalam data yang dicari berdasarkan filter
//   //jika x tidak lowercase maka 'Angela' tidak termasuk karna huruf A tidak lowercase sehingga tidak termasuk dalam kriteria yang dicari, yaitu "an"
// });
// console.log(filteredName);
// console.log(filteredName.slice(0, 3));
// if (filteredName.length < 1) {
//   console.log("tidak ada");
//}

const searchName = (filter, limit, cb) => {
  let filteredName = name.filter((x) => {
    return x.toLowerCase().includes(filter);
  });
  cb(filteredName, limit);
  //argument filteredName diambil dari variabel yang dideklarasikan di dalam function yang sama dan dilempar ke parameter function limitedName sebagai parameter hasil
  //argument limit diambil dari parameter limit dan dilempar sebagai argument ke parameter function limitedName sebagai parameter num
  // console.log(filteredName.slice(0, limit));
};

const limitedName = (hasil, num) => {
  console.log(hasil.slice(0, num));
};

searchName("an", 3, limitedName);
