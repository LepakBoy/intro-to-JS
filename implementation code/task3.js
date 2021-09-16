const arkFood = (harga, voucher, jarak, pajak) => {
  const potongan = hitungPotongan(harga, voucher);
  const ongkos = hitungOngkos(jarak);
  const biayaPajak = hitungPajak(pajak);
  const totalPajak = harga * biayaPajak;
  const subTotal = harga - potongan + ongkos + totalPajak;
  console.log(`harga : ${harga}`);
  console.log(`potongan voucher : ${potongan}`);
  console.log(`ongkos kirim : ${ongkos}`);
  //   console.log(biayaPajak);
  console.log(`pajak : ${totalPajak}`);
  console.log(`subtotal : ${subTotal}`);
};

const hitungPotongan = (harga, voucher) => {
  if (voucher === "ARKAFOOD5") {
    if (harga >= 50000) {
      let diskon = 50 / 100;
      let potongan = harga * diskon;

      if (potongan > 50000) {
        potongan = 50000;
        // console.log(potongan);
      }
      //   console.log(potongan);
      return potongan;
    } else if (harga < 50000) {
      potongan = 0;
      //   console.log(potongan);
      return potongan;
    }
  } else if (voucher === "DITRAKTIRDEMY") {
    if (harga >= 25000) {
      let diskon = 60 / 100;
      let potongan = harga * diskon;
      //   console.log(potongan);
      if (potongan > 30000) {
        potongan = 30000;
        // console.log(potongan);
      }
      return potongan;
    } else if (harga < 30000) {
      potongan = 0;
      return potongan;
    }
  } else if (voucher === false) {
    potongan = 0;
    return potongan;
  }
};

const hitungOngkos = (jarak) => {
  if (jarak <= 2) {
    ongkos = 5000;
    // console.log(ongkos);
  } else if (jarak > 2) {
    ongkos = (jarak - 2) * 3000 + 5000;
    // console.log(ongkos);
  }
  return ongkos;
};
const hitungPajak = (pajak) => {
  if (pajak === true) {
    pajak = 5 / 100;
    return pajak;
  } else if (pajak === false) {
    pajak = 0;
    return pajak;
  }
};
arkFood(75000, "DITRAKTIRDEMY", 13, false);
//"ARKAFOOD5"
//"DITRAKTIRDEMY"
