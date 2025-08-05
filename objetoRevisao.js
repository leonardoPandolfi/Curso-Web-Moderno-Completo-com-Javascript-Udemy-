//colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Civic 2011',
    valor: 41000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: `Rua Ataliba`,
            numero: 123
        }
    },              
    condutores: [{
        nome: `Leonardo`,
        idade: 23
    },{
        nome: `Hanna`,
        idade: 22,
    }],
    calcularValorSeguro: function() {
        //...
    } 
}

carro.proprietario.endereco.numero = 1000
carro[`proprietario`][`endereco`][`logradouro`][`condutores`]
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)