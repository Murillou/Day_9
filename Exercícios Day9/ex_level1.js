/* Filter serve para filtrar elementos do array, 
reduce é um metodo de acumulação, 
forEach transforma cada item do array em uma função,
map interage com cada elemento do array podendo até criar um novo
*/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

function exibir(){
    console.log('O Resultado das alterações é:')
}

console.log('=====OUTRA QUESTÃO=====')

countries.forEach((paises) => console.log(paises))

console.log('=====OUTRA QUESTÃO=====')

names.forEach((nomes) => console.log(nomes))

console.log('=====OUTRA QUESTÃO=====')

numbers.forEach((nums) => console.log(nums))

console.log('=====OUTRA QUESTÃO=====')

countries.map((paises) => console.log(paises.toUpperCase()))

console.log('=====OUTRA QUESTÃO=====')

countries.map((paises) => console.log(paises.length))

console.log('=====OUTRA QUESTÃO=====')

numbers.map((nums) => {console.log(nums * nums)})

console.log('=====OUTRA QUESTÃO=====')

names.map((nomes) => console.log(nomes.toUpperCase()))

console.log('=====OUTRA QUESTÃO=====')

products.map((precos) => console.log(precos.price))

console.log('=====OUTRA QUESTÃO=====')

const filtrar = countries.filter((paises) => (paises.endsWith('land')))
console.log(filtrar)

console.log('=====OUTRA QUESTÃO=====')

const filtrarTamanho = countries.filter((paises) => paises.length == 6)
console.log(filtrarTamanho)

console.log('=====OUTRA QUESTÃO=====')

const filtrarTamanhoTwo = countries.filter((paises) => paises.length >= 6)
console.log(filtrarTamanhoTwo)

console.log('=====OUTRA QUESTÃO=====')

const filtrarPaises = countries.filter((paises) => paises.startsWith('E'))
console.log(filtrarPaises)

console.log('=====OUTRA QUESTÃO=====')

const productFilter = products.filter((precos) => typeof precos.price != 'string')
console.log(productFilter)


console.log('=====OUTRA QUESTÃO=====')

function getStringList(arr){
    return arr.filter((element) => typeof element == 'string')
}
console.log(getStringList(numbers))

console.log('=====OUTRA QUESTÃO=====')

console.log(numbers.reduce((add, arr) => add + arr, 0))

console.log('=====OUTRA QUESTÃO=====')

const arr = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'and IceLand', 'are north European countries']
console.log(arr.reduce((add, acc) => add + acc))

console.log('=====OUTRA QUESTÃO=====')

/*some verifica sem pelo menos 2 itens do array tem algo em comum, já o every verifica se TODOS tem algo em comum
retorna valor booleano em ambos
*/

console.log('=====OUTRA QUESTÃO=====')

console.log(names.some((element) => element.length > 7))

console.log('=====OUTRA QUESTÃO=====')

console.log(names.every((elements) => elements.includes('land')))

console.log('=====OUTRA QUESTÃO=====')

// find retorna o exato primeiro valor que satisfazer a condição, já o findIndex retorna o primeiro indice
 
console.log('=====OUTRA QUESTÃO=====')

console.log(countries.find((elements) => elements.length == 6))

console.log('=====OUTRA QUESTÃO=====')

console.log(countries.findIndex((elements) => elements.length == 6))

console.log('=====OUTRA QUESTÃO=====')

console.log(countries.findIndex((element) => element.includes('Norway')))

console.log('=====OUTRA QUESTÃO=====')

console.log(countries.findIndex((element) => element.includes('Russia')))




