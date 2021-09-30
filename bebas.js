var nilai1 = [2,4,1,12,20,14,45,62,90,12,16,17,16,34,32,31,10]          
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

        console.log(nilaiMaks(nilai1))