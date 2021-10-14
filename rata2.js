function rataRata (arr, arr1) {
    function jumlah(a){
        let hasilJumlah = 0
        for (let i = 0; i<a.length; i++){
            hasilJumlah += a[i]
        }
        return hasilJumlah
    }
    let jumlahA = jumlah(arr)
    let jumlahB = jumlah(arr1)
    let hasilRata2 = ( jumlahA + jumlahB ) / (arr.length + arr1.length)
    return hasilRata2
}

let arr = [1,2,3]
let arr1 = [4,5,6,7]
console.log(rataRata(arr, arr1))