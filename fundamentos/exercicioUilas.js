function calcularSaldoRanqueadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias >= 101) {
        return "Imortal";
    } else {
        return `Voce náo tem rank!`
    }
    
}

let vitorias = 20;  // Usei 20 e 5 aqui, entao da 15, elo bronze. tmj guys
let derrotas = 5;


let saldoRanqueadas = calcularSaldoRanqueadas(vitorias, derrotas);
console.log(`O saldo de ranqueadas é: ${saldoRanqueadas}`);


