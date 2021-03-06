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
console.log(seleksiNilai(40, 150, [4, 5, 34, 1, 7, 9, 10]));
console.log(seleksiNilai(6, 35, [4, 5, 14, 1, 7, 9, 10]));
