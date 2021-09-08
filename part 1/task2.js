const mtk = 100,
  ipa = 100,
  bahasaInggris = 100,
  bahasaIndonesia = 19;

//let rataRata = 80;
let rataRata = (mtk + ipa + bahasaIndonesia + bahasaInggris) / 4;
let grade;
let hasil;

if (mtk && ipa && bahasaInggris && bahasaIndonesia) {
  if (typeof mtk != "number" || typeof ipa != "number" || typeof bahasaIndonesia != "number" || typeof bahasaInggris != "number") {
    // console.log("nilai harus bertipe number");
    hasil = "nilai harus bertipe number";
  } else {
    rataRata <= 100 && rataRata >= 90
      ? (grade = "a")
      : rataRata < 90 && rataRata >= 80
      ? (grade = "b")
      : rataRata < 80 && rataRata >= 70
      ? (grade = "c")
      : rataRata < 70 && rataRata >= 60
      ? (grade = "d")
      : rataRata < 60 && rataRata >= 0
      ? (grade = "e")
      : //KENDALA: saat mengubah value rataRata menjadi 'eror' saat suatu kondisi saja
        ((grade = "nilai tidak benar"), (rataRata = "nilai tidak benar"));
    // (rataRata = "nilai tidak benar"),
    hasil = `hasil: rata-rata = '${rataRata}' dengan grade = '${grade}'`;
    // console.log(grade);
  }
} else {
  // console.log("ada nilai yang kosong");
  //KENDALA :  jika ada nilai yang kosong, grade menjadi und sedangkan rata-rata tetap ada.
  //hasil = `ada nilai yang kosong. rata-rata = ${rataRata}, grade = ${grade}`;
  hasil = "ada nilai yang kosong";
}

console.log(hasil);
// console.log(rataRata);
// console.log(grade);

// IF ELSE ======================================================

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
//   // console.log("nilai tidak benar");
//   grade = "tidak benar";
//   rataRata = "tidak benar";
// }

// console.log(grade);

// rataRata >= 100 && rataRata <= 90 ? (grade = "a") : (grade = "b");
// console.log(grade);
