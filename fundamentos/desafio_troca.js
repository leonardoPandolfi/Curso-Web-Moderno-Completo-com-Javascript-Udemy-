let a = 7;
let b = 94;


// depois da troca... a = 94 e b = 7


let temp = a;    // temp = a pegou o valor 7 e guardou, a ficou igual a b(94) b(94) = temp(7) valor inicial da variavel A.
a = b;
b = temp;

console.log(a);
console.log(b);