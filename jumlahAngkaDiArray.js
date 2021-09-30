let angka = [12, 313, 123, 123, 123, 12, 12, 3, 23];
let angka1 = [213,23,231,3,123,4,12,41,5]
function penjumlahan(x) {
  let total = 0;
  i = 0;
  while (i < x.length) {
    total += x[i];
    i += 1;
  }
  return total
}
console.log(penjumlahan(angka1))


export default penjumlahan