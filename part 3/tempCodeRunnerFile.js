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