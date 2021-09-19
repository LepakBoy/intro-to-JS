const printSegitiga = (num) => {
  if (typeof num !== "number") {
    console.log("data harus number");
  } else {
    for (x = num; x >= 1; x--) {
      let hasil = "";
      for (y = 1; y <= x; y++) {
        hasil += y;
      }
      console.log(hasil);
    }
  }
};
printSegitiga(5);
