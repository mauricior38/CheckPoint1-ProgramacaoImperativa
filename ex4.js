// EXERCICIO AULA IMC

var nome = "Mauricio";
var idade = 32;
var peso = 79.700;
var altura = 1.70;
var plano = true;

if(plano === false){
    var plano = "não possuí plano"
}else{
    var plano = "possuí um plano"
}

var indice = peso / (altura * altura)

console.log(`O ${nome} atualmente que atualmente possui ${idade}, tem o índice de massa corporal de ${indice.toFixed(2)}, atualmente o mesmo ${plano}`)