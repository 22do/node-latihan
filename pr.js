var nilai = [2,4,1,12,20,14,45,62,90,12,16,17,16,34,32,31,10]          
for(var i=0;i<nilai.length;i++)
        {    
             if(i == 0)
             { 
              var nilai_mak = nilai[i];
             }
             else
             {
                    if(nilai[i] > nilai_mak)
                    {
                      nilai_mak = nilai[i];
                    }
             }            
        }
        console.log (nilai_mak)   