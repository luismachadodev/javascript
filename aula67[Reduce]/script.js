//  Some todos os numeros (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor) {
//   if(valor % 8 === 0) acumulador.push(valor)
//   return acumulador
// }, [])
// console.log(total

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor) {
//   acumulador.push(valor * 2)
//   return acumulador
// }, [])

// console.log(total)

// USO ORIGINAL EM BAIXO = TRANSFORMAR UM ARRAY EM UM UNICO VALOR

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor) {
//   acumulador += valor
//   return acumulador
// })

// console.log(total)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor) {
//   if(valor % 2 === 0) {
//     acumulador += valor
//   }

//   return acumulador
// }, 0)

// console.log(total)

// Retorne a pessoa mais velha

const pessoas = [
  { nome: 'Luis', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 },
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador
  return valor;
})
console.log(maisVelha)