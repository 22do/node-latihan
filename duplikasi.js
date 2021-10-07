function duplikasi(angka, array) {
  let hasil = 0;
  let i = 0;
  while (i < array.length) {
    if (angka === array[i]) {
      hasil++;
    }
    i++;
  }
  return hasil
}

//export default duplikasi
//Unexpected token 'export'
