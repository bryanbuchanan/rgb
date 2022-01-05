const fs = require('fs')

let json = fs.readFileSync('source.json')
let data = JSON.parse(json)

const formattedData = {
	red_ssf: [],
	green_ssf: [],
	blue_ssf: [],
}

for (const [key, set] of Object.entries(data.spectral_data.data.main)) {
	formattedData.red_ssf.push(set[0])
	formattedData.green_ssf.push(set[1])
	formattedData.blue_ssf.push(set[2])
}

console.log({formattedData})