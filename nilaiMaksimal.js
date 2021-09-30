function nilaiMaks(x) {
    i = 0
    while (i<x.length){
            {    
                 if(i == 0)
                 { 
                  var nilai_mak = x[i];
                 }
                 else
                 {
                        if(x[i] > nilai_mak)
                        {
                          nilai_mak = x[i];
                        }
                 }
            }
        i += 1
        }
            return nilai_mak
        }