const divideAndSort = (nilai) => {
  result = String(nilai)
    .split(0)
    .map((x) => {
      return x.split("").sort().join("");
    })
    .join("");

  console.log(parseInt(result));
};
divideAndSort(540980760342);
// 925404963040935
// 3209358059043
// 540873067091
//6540859093254
