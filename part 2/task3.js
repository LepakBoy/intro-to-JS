function seleksiNilai(dataAwal, dataAkhir, dataArray) {
  if (dataAkhir <= dataAwal) {
    return "data akhir harus lebih gede dari data awal";
  }
  if (dataArray.length < 5) {
    return "dataArray harus berjumlah lebih dari 5 nilai";
  }

  //filter array
  let result = dataArray.filter(function (x) {
    if (x > dataAwal && x < dataAkhir) {
      return x;
    }
  });

  //sort array
  result.sort(function (x, y) {
    return x - y;
  });

  if (result.length == 0) {
    return "tidak ada nilai";
  } else {
    return result;
  }
}
console.log(seleksiNilai(4, 15, [4, 5, 34, 13, 16, 9, 10]));

// const dataAwal = 32,
//   dataAkhir = 12,
//   dataArray = [4, 5, 6, 7, 8, 16, 15, 12, 30];

// if (dataAkhir < dataAwal) {
//   console.log("akhir harus lebih gede");
// }
// if (dataArray.length < 5) {
//   console.log("harus 5 lebih");
// }

// let result = dataArray.filter(function (x) {
//   if (x > dataAwal && x < dataAkhir) {
//     // console.log(x);
//     return x;
//   }
// });

// console.log(result);
// console.log(result.length);

// if (result.length == 0) {
//   console.log("ga ada");
// } else {
//   console.log(result);
// }
