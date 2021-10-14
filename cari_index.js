function cariIndex (angka, array){
    let hasil = 'index ke ' + 0
    for(let i = 0; i<array.length; i++){
        if(angka === array[i]){
            hasil += i
            break
        }
    }
    return hasil
}

//let arr = [1,1,1,1,2,2,3,4,5,6,7]
//console.log(cariIndex(2, arr))