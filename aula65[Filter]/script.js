// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor =>  valor > 10)
// console.log(numerosFiltrados)

// function callbackFilter(valor) { // FORMA 'ANTIGA'
//   return valor > 10
// }


// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//   console.log(valor, indice, array)
//   return valor > 10
// })







// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luis', idade: 67 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Giovana', idade: 19 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'Letícia', idade: 25 },
]
// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
// console.log(pessoasComNomeGrande)

// const pessoasIdade = pessoas.filter(obj => obj.idade > 50)
// console.log(pessoasIdade)

const NomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(NomeTerminaComA)