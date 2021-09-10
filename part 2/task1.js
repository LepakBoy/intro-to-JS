// 10 built in function javascript
//1. CONCAT  = untuk menggabungkan nilai-nilai dari 2 array atau lebih ke dalam sebuah array
const arr1 = ["film", "makan", "minum"];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [true, false];
const newArr = arr1.concat(arr2, arr3);
console.log(newArr);

//2. FILTER = untuk mengembalikan element array yang sesuai dengan kriteria yang ditentukan oleh suatu function
const arrFilter = [12, 34, 5, 67, 43, 8, 64, 3, 4, 89, 2];
const newFilter = arrFilter.filter(function (x) {
  return x > 10;
});
console.log(newFilter);

const schoolList = [
  {
    name: "SDIT Al-Ishmah",
    yearIn: "2004",
    yearOut: "2010",
    major: null,
  },
  {
    name: "MTS Al-Irsyad",
    yearIn: "2010",
    yearOut: "2013",
    major: null,
  },
  {
    name: "MA Al-Irsyad",
    yearIn: "2014",
    yearOut: "2016",
    major: null,
  },
];
const newSchooList = schoolList.filter(function (param) {
  return param.name == "MA Al-Irsyad";
});
console.log(newSchooList);

//3. INDEXOF = untuk mencari index suatu element
const arrIndex = ["bejo", "untung", "ari", "budi"];
let newNumber = arrIndex.indexOf("ari");
console.log(newNumber);

//4. SORT = untuk mengurutkan nilai array
const arrSort = [1, 23, 54, 56, 67, 4, 45, 89, 23, 52, 13];
arrSort.sort();
console.log(arrSort);

//5. SLICE = untuk membatasi  pengembalian nilai array
const arrSlice = ["bejo", "udin", "budi", 2, 3, 4, true, null];
console.log(arrSlice.slice(0, 3)); //mencetak array hanya dari index 0 sampai index 3-1
console.log(arrSlice.slice(2)); //mencetak array dari index 2 smapai akhir

//6.
