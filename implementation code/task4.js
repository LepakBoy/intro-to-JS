const divideAndSort = (nilai) => {
  result = Array.from(String(nilai).split(0))
    .map((x) => {
      return x.split("").sort().join("");
    })
    .join("");

  console.log(parseInt(result));
};
divideAndSort(654085909325);
// 925404963040935
// 3209358059043
// 540873067091
