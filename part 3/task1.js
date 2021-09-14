const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jum'at"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      //jika kondisi cek = true (data yang diinput sesuai dengan kondisi varable let cek), maka nilai pada variable cek akan di tampung di resolve dan akan dikirimkan ke function .then()
      if (cek) {
        resolve(cek);
        //jika kondisi cek = false, maka reject akan berisikan string dibawah ini dan akan dikirimkan ke function .catch()
      } else {
        reject(new Error("hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

//DENGAN THEN CATCH =====================================================================================
//menjalankan function dengan mengirim ("minggu") ke dalam paramter
cekHariKerja("senin")
  //jika resolve berisikan nilai, maka nilai tersebut akan dikirim ke .then() dibawah ini dan dimasukan ke variable result
  .then((result) => {
    console.log(result);
  })
  //jika reject berisikan nilai, maka nilai tersebut akan dikirimkan ke function .catch() dan dimasukan ke dalam variable error,
  .catch((error) => {
    console.log(error);
  });

//DENGAN TRY CATCH =====================================================================================
//function cariHari menerima argument dan mengirimkan argument ke parameter function yang diproses di dalam try{}
const cariHari = async (hari) => {
  //jika function cekHariKerja menghasilkan nilai pada resolve, maka nilai teresbut dikembalikan ke dalam try{} dan disimpan di sebuah variable (const hasil)
  try {
    const hasil = await cekHariKerja(hari);
    console.log(hasil);
    // jika function cekHariKerja menghasilkan nilai pada reject, maka nilai dikirim ke catch
  } catch (eror) {
    console.log(eror);
  }
};
cariHari("minggu");
