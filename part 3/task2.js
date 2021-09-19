const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];
    if (!error) {
      // kalau error = false, maka argument pertama callback adalah null (tidak ada)
      callback(null, month);
    } else {
      //jika error = true maka argument callback adalah pesan error dan array kosong
      callback(new Error("sorry data not found"), []);
    }
  }, 2000);
};

//DENGAN FUNCTION KEDUA
const showMonth = (isError, month) => {
  //jika isError berisikan nilai, maka cetak isi nilainya(pesan error)
  if (isError) {
    console.log(isError);
    // console.log(isError)
    return;
  }
  //jika isError tidak berisikan nilai, maka lakukan proses untuk variable month
  console.log(
    month.map((x) => {
      return x;
    })
  );
};
getMonth(showMonth);

//TANPA FUNCTION KEDUA
//jika callback mengirimkan argument pertama maka jalankan proses di dalam if, jika tidak lanjutkan ke proses selanjutnya
// getMonth((isError, month) => {
//   //jika error = true maka isError berisikan pesan error
//   if (isError) {
//     console.log(isError);
//   }
//   console.log(
//     month.map((x) => {
//       return x;
//     })
//   );
// });
