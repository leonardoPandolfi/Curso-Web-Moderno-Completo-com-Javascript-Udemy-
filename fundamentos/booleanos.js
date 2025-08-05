let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!true)   //(!! = nao nao / ! = nao) ex: "!true" (nao true) = false,  "!!true" (nao nao true) = true

console.log('os verdadeiros... ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 33))

console.log('os falsos... ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('pra finalizar...')
console.log(!!(''|| null || 0 || ' ' )) //retorna verdadeiro se houver algum, nesse caso a string com um espaço é verdadeira.
console.log((''|| null || 0 || 'epa ' || 123 )) //retornou o primeiro verdadeiro (epa)


let nome = ''                      // let nome '' retorna desconhecido
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido') //let nome 'Lucas' retorna Lucas