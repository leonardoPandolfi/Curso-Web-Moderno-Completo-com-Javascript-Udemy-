const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //posso mudar o nome da constante por aqui ex: a: carro
const obj2 = {a, b, c} //ja entende que a é a nao precisando duplicar como o exemplo de cima.
console.log(obj1, obj2)

const nomeAttr = `nota`
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {           // forma tradicional
        // ...
    },
    funcao2() {                     //forma ecmascript + simples

    }
}

console.log(obj5)