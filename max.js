function nilaiMaks(x) {
  i = 0;
  while (i < x.length) {
    {
      if (i == 0) {
        var nilai_mak = x[i];
      } else {
        if (x[i] > nilai_mak) {
          nilai_mak = x[i];
        }
      }
    }
    i += 1;
  }
  return nilai_mak;
}
const arr1 = [1, 1, 1, 1, 1, 1, 1, 11, 99, 1, 1, 1, 1];
const arr2 = [1, 1, 1, 1];
const arr3 = [3, 3, 3, 3];

console.log(nilaiMaks(arr1) == 99);
console.log(nilaiMaks(arr2) == 1);
console.log(nilaiMaks(arr3) == 3);
//export default nilaiMaks;
