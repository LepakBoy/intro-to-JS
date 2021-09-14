const getData = async () => {
  //ambil data dari url
  fetch("https://jsonplaceholder.typicode.com/users")
    //jika berhasil maka data akan dimasukan ke variable response dan  diubah bentuk menjadi json dengan method .function()
    .then((response) => response.json())
    //jika berhasil maka dilakukan pencarian dengan method map() ditiap2 element data yang berupa properti name dan dicetak dalam bentuk string
    .then((response) => {
      hasil = response.map((x) => {
        return x.name;
      });
      console.log(hasil.toString());
    });
};

getData();
