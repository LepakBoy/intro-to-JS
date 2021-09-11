// 10 built in function javascript
//1. CONCAT  = untuk menggabungkan nilai-nilai dari 2 array atau lebih ke dalam sebuah array
const arr1 = ["film", "makan", "minum"];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [true, false];
const newConcat = arr1.concat(arr2, arr3);
console.log(newConcat);

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
  return param.name == "SDIT Al-Ishmah";
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

//6. MAP = untuk memproses setiap element pada array dengan function yang digunakan dan mengembalikannya ke sebuah array baru
const arrMap = [2, 3, 4, 5, 6];
const newMap = arrMap.map(mapFunc);
function mapFunc(num) {
  return num * 2;
}
console.log(newMap);

//7. POP = untuk mengapus indeks terakhir pada suatu array
const arrPop = [2, 4, 6, "makan", true, "minum", "main game"];
const newPop = arrPop.pop();
console.log(newPop);
console.log(arrPop);

//8. PUSH = menambah nilai di akhir array
const arrPush = [4, 5, 6, 3, "belajar", "nonton", false, "minum"];
arrPush.push(10);
console.log(arrPush);

//9. toFIx = membulatkan angka sesuai dengan perintah
let fix = 34.246677;
console.log(fix.toFixed(3));
console.log(fix.toFixed(2));
console.log(fix.toFixed(1));

//10 FLOOR = membulatkan bilangan number ke bawah
let floor = 1.8;
console.log(Math.floor(floor));
