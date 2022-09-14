// let numbers =[22, 33, 54, 66, 72]
// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]

// console.log(numbers[numbers.length])
// console.log(grupoDeAmigos[1][0])

// let str = 'uma string qualquer'

// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

let arrayOriginal = ["0", "1", "2", "3", "4", "5"];

function imprimirInverso() {

    for (tamanhoArray = arrayOriginal.length; tamanhoArray >= 0; tamanhoArray--) {
        console.log(arrayOriginal[tamanhoArray]);
    }

}

//imprimirInverso();




// let arraySoma = [1, 2, 3]

// function soma(){
//     let valueA = 0;
//     let resultado = 0;

//     for(index = 0; index < arraySoma.length; index++){
//         valueA = arraySoma[index];
//         resultado = valueA + resultado;
//     }
//     console.log(resultado)
// }

// soma()


// let arrayJoin = ['O', 'l', 'a']

// function join(){
//     let valueA = '';
//     let resultado = '';

//     for(index = 0; index < arrayJoin.length; index++){
//         valueA = arrayJoin[index];
//         resultado = resultado + `${valueA}`
//     }
//     console.log(resultado)
// }

// join()


// let arrayFilmes = [ "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela" ];

// function filmes(){
//     let valueA = '';
//     let valueB = '';

//     for(index = 0; index < arrayFilmes.length; index++){
//         valueA = arrayFilmes[index];
//         valueB = valueA.toUpperCase();
//         console.log(valueB)
//     }
    
// }

// filmes();