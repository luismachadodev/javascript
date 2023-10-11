//Factory function (funcao fabrica) <<<
// Constructor function (funcao construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // setter
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    },
    fala(assunto) {
      return `${this.nome} ${this.sobrenome} está ${assunto}.`
    },
    altura,
    peso,
    // getter
    get imc() {
      const indice = this.peso / (this.altura ** 2)
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Luis', 'Henrique', 1.6, 68)
const p2 = criaPessoa('Andre', 'Henrique', 1.4, 78)
const p3 = criaPessoa('Junior', 'Henrique', 1.3, 98)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)
// p1.nomeCompleto = 'Andrade Afonso Pereira'
// console.log(p1.nome)
// console.log(p1.sobrenome)
// console.log(p1.fala('querendo aprender muito'))
