let arr = [
  {id : 33, name : 'Jhon'},
  {id : 90 ,name : 'Cena'},
  {id : 115 ,name : 'The Rock'}
]
let param =  33 //input bebas
let hasil = -12345
let tulisan = []
let ids = (x) => {
  for(let i = 0; i<arr.length; i++){
    if(arr[i].id === x){
      tulisan.push(arr[i])
      hasil += 12345 + arr[i].id
      return tulisan
    }
  }
}
// tulisan di push di <body>
//
console.log(hasil)
console.log(tulisan)

ids(param)
console.log(hasil,tulisan)
let ketemu = () => {
  if(hasil === param){
  console.log(true)
}
else{
  console.log(false)
}
}
ketemu()

// if(ids(x) === param){
//   console.log('benar')
// }
// else{
//   console.log('salah')
// }

// if(ids === 115){
//   console.log('benar')
// }
// else{ console.log('salah')}

// to do = arr.id === param id  murid
// ambil param id -> dicocokan ke arr[i].id -> if cocok return hasil += arr[i].id , return i = i