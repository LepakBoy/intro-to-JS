let teks = "kodok";
let hasil = "";
let i = teks.length - 1;

while (i >= 0) {
  hasil = hasil + teks[i];
  i = i - 1;
}

if (hasil == teks) {
  console.log("palindrom");
} else {
  console.log("bukan palindrom");
}

//DENGAN BUILT IN METHOD
// const palindrom = (str) => {
//   if (str.toLowerCase().split("").reverse().join() === str) {
//     console.log("palindrom");
//   } else {
//     console.log("bukan palindrom");
//   }
// };

// palindrom("belajar");
