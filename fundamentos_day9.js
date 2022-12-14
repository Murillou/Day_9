//setInterval

function chamando(){
    console.log('Olá Mundo!')
}  // mostrará Olá mundo a cada 5 segundos
setInterval(chamando, 5000) // setta o valor em millisegundos, 1000ms = 1 seg

function chamandoTwo(){
    console.log('Olá Mundo 2 !!')
} // mostrará 'olá mundo 2' em 2 segundos
setTimeout(chamandoTwo, 2000) // setta o valor que vai demorar até aparecer a mensagem ou a função.

// forEach

const pais = ['Suécia', 'Itália', 'Brasil', 'França', 'Argentina']
pais.forEach((elementos) => console.log(elementos.toUpperCase()))
// forEach transforma cada elemento do array em uma função.

let soma = 0
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.forEach((elementos => soma += elementos))
console.log(soma)

// map
const numerosTwo = [1, 2, 3, 4, 5, 6]
const novoNumeros = numerosTwo.map((elements => elements * elements)) 
console.log(novoNumeros) // map interage com os elementos e modifica ele podendo criar até um novo array

const nomes = ['Murillo', 'Vinícius', 'Ferreira', 'Pontes']
const nomesMaiusculos = nomes.map((nome => nome.toUpperCase()))
console.log(nomesMaiusculos) // utilizando map para deixar todos os elementos maisculos
const primeirasLetras = nomes.map((nome => nome.toUpperCase().slice(0, 4)))
console.log(primeirasLetras) // cortando as 4 primeiras letras e deixando maisculo com map

// filter

const paisesTwo = ['Brasil', 'Noruega', 'Suécia', 'Itália', 'França', 'Croácia', 'Argentina', 'Suiça']
const filtrar = paisesTwo.filter((elements => elements.includes('Su')))
console.log(filtrar) // filter serve para literalmente filtrar valores do array com as especificações que quiser

const filtrarTwo = paisesTwo.filter((elements) => elements.endsWith('ia'))
console.log(filtrarTwo) // outro exemplo, filtrando paises que terminam com 'ia'

const filtrarTree = paisesTwo.filter((elements) => elements.length === 6)
console.log(filtrarTree) // outro exemplo, filtrando paises que tem 6 letras

const pontuacao = [
    { nome: 'Mickael', pontos: 95 },
     { nome: 'Gabriel', pontos: 98 },
    { nome: 'Gustavo', pontos: 80 },
    { nome: 'Juan', pontos: 50 },
    { nome: 'Letycia', pontos: 85 },
    { nome: 'Murillo', pontos: 100 },
  ]

const pontos = pontuacao.filter ((score) => score.pontos > 80)
console.log(pontos) // filtrando aqueles com pontos maior que 80

// reduce

const numeroTree = [1, 2, 3, 4, 5, 6]
const somaTwo = numeroTree.reduce((acc, cur) => acc + cur, 0) // obs: especificar um valor padrão
console.log(somaTwo) // é um metodo de de acumulação, leva 2 valores, o inicial e que acumula

// every

const nomesProprios = ['Segundo', 'Renata', 'Letycia', 'Murillo']
const valorEmComum = nomesProprios.every((elementos) => typeof elementos === 'string')
console.log(valorEmComum) // verifica se todos os valores do array tem algo em comum e retorna boolean

// find

const idades = [10, 29, 19, 20, 23, 17]
const idade = idades.find((elements) => elements < 20)
console.log(idade) // retorna o PRIMEIRO valor que satisfaz a condição
const idadeTwo = idades.find((elements) => elements > 20)
console.log(idadeTwo) // outro exemplo

// findIndex

const idadesTwo = [10, 29, 19, 20, 23, 17]
const idadee = idadesTwo.findIndex((elements) => elements > 20)
console.log(idadee) // parecido com o find, porém, retorna o valor do indice

// some 

const all = [10, 2, 3, true, 'Murillo', 'Vinícius']
const allTeste = all.some((elements) => typeof elements === 'string')
console.log(allTeste) // verifica se pelo menos 2 elementos tem algo em comum, retorna valor booleano

// sort com strings

const comidas = ['Queijo', 'Frango', 'Banana', 'Pizza', 'Lasanha', 'Maça']
console.log(comidas.sort()) // ordem alfabetica OBS: ESSE METODO ALTERA O VALOR DO ARRAY ORIGINAL

// sort com numeros

const numerosTree = [3.49, 9.3, 3, 100]
console.log(numerosTree.sort()) // vai da um erro, ele pega o primeiro digito, levando 1 ser menor que os outros
// podemos ajustar isso com uma função dentro do metodo sort
numerosTree.sort(function (x, y){
    return x - y
})
console.log(numerosTree)


// sort em objeto

const pontuacoes = [
    {nome: 'murillo', idade: 20},
    {nome: 'letycia', idade: 18},
    {nome: 'gustavo', idade: 19},
    {nome: 'gabriel', idade: 21},
]

pontuacoes.sort((a, b) => {
    if (a.idade < b.idade) return -1
    if (a.idade > b.idade) return 1
    return 0
}) // em objetos utilizamos a função na chave, nesse caso utilizei na chave idade
console.log(pontuacoes)



