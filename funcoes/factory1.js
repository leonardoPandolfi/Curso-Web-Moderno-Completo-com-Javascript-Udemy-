const prod1 = {
    nome: '...',
    preco: 45
}

//factory simples

//factory > fabrica> essa funcao fabrica objetos(ex: pessoa, fabricante(bmw,mercedez), etc...)

function criarPessoa() {
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


