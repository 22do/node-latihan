let object1 = {
	"data utama": {
		"description": "Ini tentang info pokok customer properties",
		"properties": {
			"Nama": "text",
			"Gender": "text",
			"Umur": "number",
			"Telp": "telp-number"
		}
	}
}

function validateType(object1){
	let hasil = false
	if(typeof object1 === 'object'){
		for(let prop in object1){//prop = data utama
			if(typeof prop === 'string'){
			//console.log(typeof object1[prop]['description'])
				let description = object1[prop]['description']
				if(typeof description === 'string'){
					for(let properti in object1[prop]['properties']){
						//console.log(properti) = umur dll
						let keterangan = object1['data utama']['properties'][properti]
						//console.log(keterangan) = type dll
						if(keterangan || 'text' || 'number' || 'telp-number' || 'password'){
							//console.log(`${keterangan } =`, true)
							hasil = true
						}
            else {
              hasil = false
            }
					}
				}
			}
		}
	}
	return hasil
}

console.log(validateType(object1))