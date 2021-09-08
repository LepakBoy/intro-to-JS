const mtk = 70,
  ipa = 80,
  bahasaInggris = 40,
  bahasaIndonesia = 50;

// let rataRata = 101;
let rataRata = (mtk + ipa + bahasaIndonesia + bahasaInggris) / 4;
let grade;

// if (rataRata <= 100 && rataRata >= 90) {
//   grade = "a";
// } else if (rataRata <= 89 && rataRata >= 80) {
//   grade = "b";
// } else if (rataRata <= 79 && rataRata >= 70) {
//   grade = "c";
// } else if (rataRata <= 69 && rataRata >= 60) {
//   grade = "d";
// } else if (rataRata <= 59 && rataRata >= 0) {
//   grade = "e";
// } else {
//   console.log("nilai tidak benar");
// }

// console.log(grade);

rataRata >= 100 && rataRata <= 90 ? (grade = "a") : (grade = "b");
console.log(grade);
