// FUNCTION 1
const gabungKalimat = (kataPertama, kataKedua) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof kataPertama !== "string" || typeof kataKedua !== "string") {
        reject("harus berupa kata");
      } else {
        resolve({ kataPertama, kataKedua });
      }
    }, 2000);
  });
gabungKalimat("fikri", "bekasi")
  .then((result) => {
    console.log(`halo, nama saya ${result.kataPertama}, dan saya tinggal di ${result.kataKedua}`);
  })
  .catch((error) => {
    console.log(error);
  });

// FUNCTION 2

const seleksiNiliai = (dataNilai) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dataNilai.filter((x) => {
        if (typeof x !== "number") {
          reject(new Error(`ada data yang bukan angka`));
        }
      });
      resolve(dataNilai);
    }, 2000);
  });
};

const filterNiliai = (filteredNilai) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      filterdata = filteredNilai.filter((data) => {
        return data < 70;
      });
      resolve(filterdata.length);
    }, 1000);
  });
};
seleksiNiliai([1, 2, 4, "3", 12, 145, 23, 45, 56, 90, 100, 70])
  .then((dataNilai) => filterNiliai(dataNilai))
  .then((result) => {
    console.log(`ada ${result} nilai yang dibawah rata-rata`);
  })
  .catch((error) => {
    console.log(error);
  });
