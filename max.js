function nilaiMaks(x) {
  let i = 0;
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

//export default nilaiMaks = Unexpected token 'export'
//node --version = v16.10.0