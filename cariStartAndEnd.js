function cariStartAndEnd(angka, array) {
  let semiHasil = [];
  let semiHasil0 = [];
  for (let i = 0; i < array.length; i++) {
    if (angka === array[i]) {
      semiHasil.push(i);
    }
  }
  if (semiHasil.length === 0) {
    semiHasil.push(-1);
  }
  function hasil1(semiHasil1) {
    let hasil2 = [];
    hasil2.push(semiHasil1[0]);
    hasil2.push(semiHasil1[semiHasil1.length - 1]);
    return hasil2;
  }
  let hasil = hasil1(semiHasil);
  return hasil;
}
