// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456
  const metodoInterno = function() {

  }

  // Atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = () => {
    console.log(this.nome + ': Sou um método')
  }
}

const p1 = new Pessoa('Luis', 'Henrique')
const p2 = new Pessoa('Beto', 'Gilberto')
p1.metodo()

