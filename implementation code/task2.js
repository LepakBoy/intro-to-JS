let teks = "saya sedang makan nasi goreng";
const arr = teks.split(" ");
let hasil = "";
let i = arr.length - 1;

for (i; i >= 0; i--) {
  hasil += arr[i] + " ";
}

console.log(hasil);

//DENGAN BUILT IN METHOD
// const reverse = (str) => {
//   console.log(str.split(" ").reverse().join(" "));
// };
// reverse("saya makan nasi goreng");
