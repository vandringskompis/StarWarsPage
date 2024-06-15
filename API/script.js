
const output = document.querySelector('.output')
const obi = document.querySelector('.obi')
const button = document.querySelector('#character');
console.log('Kom ihåg att du kan använda console.log för felsökning!')
const obiUrl = 'https://swapi.dev/api/people/10/'
const baseUrl = 'https://swapi.dev/api/people/?search='
let data

const settings = {
	method: 'GET',
	headers: {
		
	},
	contentType: 'application/json'
}

obi.addEventListener('click', obiWan)

async function obiWan () {
	let results = await fetch(obiUrl, settings)
	data = await results.json()

	console.log(data)

	output.innerText ='Name: ' + data.name + " " + 'Year of birth: ' + data.birth_year + " " + 'Gender: ' + data.gender
/*output.innerText = JSON.stringify(data, null, 2)*/

}

button.addEventListener('click', getCharacterInfo)


async function getCharacterInfo() {

	const query = document.querySelector('#character').value
	
    let result = await fetch(baseUrl + query, settings)
    data = await result.json()
	console.log(data)


output.innerText = JSON.stringify(data, null, 2)}

/* Kan inte filtrera bland karaktärerna. Alla kommer i en lista, Aizo förklarar dåligt så det inte fungerar...

let character = data.results.find(char => char.name.toLowerCase() === query.toLowerCase());

if (character) {
	output.innerText = 'Name: ' + character.name + " " + 'Year of birth: ' + character.birth_year + " " + 'Gender: ' + character.gender;
} else {
	output.innerText = 'No character found';
}
}*/