//Exec 01
function loopDePares(numero){
    
    for( i = 0; i <= 100; i++){
        let numAnterior =+ i;

        if(numAnterior % 2 == 0 ){
            console.log(`O número ${numAnterior} é par.`)
        }
    }
}
console.log("== Exercicio 01  ==")
loopDePares(10)

//Exec 02
function loopImpares(numero, palavra){
    let numAux = 0;

    for(i=numero; i <= 100; i++)
        if((numAux + i) % 2 == 1 )
            console.log(palavra + ':' + i)
    
    
}
console.log("== Exercicio 02 ==")
loopImpares(10, "Mesa")


//Exec 03
function soma(numero){
    let numAnterior = 0;
    for( i = 0; i <= numero; i++){                
        let soma = numAnterior + i;
        numAnterior = soma;
    }

    console.log(`O resultado: ${numAnterior}`) 

    return;
}
console.log("== Exercicio 03 ==")
soma(8)

//Exec 4
function newArray(numero){

    let resultado = [];

    for(i = 0; i <= numero; i++){
        resultado.push(i)
    }
    console.log(resultado)
}
console.log("== Exercicio 04 ==")
newArray(10)


//Exec 05
function split(palavra){

    console.log(palavra[2])

    var newPalavra = [];

    for(i = 0; i < palavra.length; i++){
        newPalavra.push(palavra[i])
    }
    console.log(newPalavra)
}
console.log("== Exercicio 05 ==")
split('Olá')

//Exec 06
function moverZeros(array){
    
    let arrayZero = [];
    let arrayOutros = [];

    for(i = 0; i < array.length; i++){
        if(array[i] === 0){
            arrayZero.push(array[i])
        }else{
            arrayOutros.push(array[i])
        }
    }
    console.log(arrayOutros + ',' + arrayZero)

}
console.log("== Exercicio 06 ==")
moverZeros([false,1,1,2,0,1,3,"a"])

//Exec 07
function arrayHandler(array1, array2){

    for(i = 0; i < array1.length; i++){
        console.log(`Eu sou o ${array1[i]} e eu sou ${array2[i]}.`)
    }

}
console.log("== Exercicio 07 ==")
arrayHandler([1,2,3], ['o','l','a']);

//Exec 08

function objectArray(numero){
    let arrayFinal = [];

    for(i = 0; i < numero; i++){
        arrayFinal.push({
            valor: i,
        })
    }

    console.log(arrayFinal)
}
console.log("== Exercicio 08 ==")
objectArray(5);

//Exec 9

function arrayObjectsTwo(numero, palavra){
    let arrayFinal = [];

    for(i=0; i<numero; i++){
        arrayFinal.push({
            palavra: i,
        })
    }

    console.log(arrayFinal)
}
console.log("== Exercicio 09 ==")
arrayObjectsTwo(5, 'Palavra:')