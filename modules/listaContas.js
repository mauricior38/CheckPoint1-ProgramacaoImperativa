const dados = require('./dados')
const Conta = require('./conta')


let listaContas = [];
for (let contador = 0; contador < dados.length; contador++) {
    listaContas.push(new Conta(dados[contador].titular, dados[contador].numero, dados[contador].tipo, dados[contador].saldo) );
}

console.log(listaContas)

module.exports = listaContas;