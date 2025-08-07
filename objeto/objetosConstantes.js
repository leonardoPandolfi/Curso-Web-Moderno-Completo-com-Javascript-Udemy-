//pessoa -> 123 -> {...}
const pessoa = {nome: `Joao`}
pessoa.nome = `Pedro`
console.log(pessoa)

//pessoa -> 456 -> {...}     //Fprma um erro pois nao podemos atribuir uma constante para outro objeto
//pessoa = {nome: `Ana`}

Object.freeze(pessoa) //congelou o objeto, nao muda mais o nome por exemplo.

pessoa.nome = `Maria`   //nao consegue mudar objeto, nem adicionar, nem excluir algo. agora ele esta constante, com o codigo freeze
pessoa.end = `Rua ABVC`
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: `Joao`})
console.log(pessoa)
