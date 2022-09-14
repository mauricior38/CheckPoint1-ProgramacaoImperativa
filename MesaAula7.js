// //EXERCICIO 01

// console.log('EXERCICIO 01')
// console.log('01:' + !true)
// console.log('02:' + !false)
// console.log('03: !!false true -> Da erro no código')
// console.log('04:' + !!true)
// console.log('05:' + !1)
// console.log('06:' + !!1)
// console.log('07:' + !0)
// console.log('08:' + !!0)
// console.log('09:' + !!"")


// let x = 5
// let y = 9;

// console.log('10.a) ' + ( x < 10 && x!== 5) )
// console.log('10.b) ' + ( x < 9 || x=== 5))
// console.log('10.c) ' + !(x===y)) 

// //EXERCICIO 02

// console.log('\nEXERCICIO 02\n')
// console.log('02.1: TRUE, pois tem uma operação lógia de || ( OU ), sendo assim a condição deve atender somente uma das possibilidades para ser verdadeira \n')
// console.log('02.2: No primeiro parenteses, o resultado das condições é FALSE. Entretanto com o sinal de ! no inicio da condição, acaba tornando a condição verdadeira. No segundo parênteses, a primeira condição irá retornar FALSE e a segunda condição VERDADEIRA. Sendo assim, o resultado final das condições dentro do parenteses retornara FALSE. Porém, com o sinal de negação no inicio da condição, acaba tornando essa condição verdadeira \n');
// console.log('02.3: A condição no primeiro parênteses é verdadeira entretanto a variavel eBonito é falsa. Sendo assim, o resultado entre os parênteses acaba se tornando FALSE. Porém, com o símbolo de negação no inicio da condição, acaba tornando a condição verdadeira. \n');

// let x=5;
// let y = x++ + ++x;
// console.log('y = ' + y);
// x=3;
// y=x*(x + 1)*x++;
// x=5;
// y=3;
// y*=x+1;

// console.log('y = ' + x);
// console.log('y = ' + y);

// let numeros= [10, 8, 7, 99, 0, 1, 6]

// numeros.sort(function(a,b){ return b-a;});

// console.log(numeros);

// Linha 01 contém um array com 3 valores.
// Linha 02 contém um array com 3 valores.
// Linha 03 contém um array com 3 valores.

// Linha05 tem uma variável chamada frutas vermelhas1
// no qual ela recebe o resultado de frutasvermelhas. 
// Em frutas vermelhas foi percorrido o array, cada item
// foi salvo em frutas e logo após colocado o seu resultado em
// letras maiúsculas.

// Linha 06 foi criado uma nova varável chamada todasFrutas,
// onde foi usado o spread operator para fazer a junção dos resultados
// de todas as array's. Vale ressaltar que a array frutasVermelhas1
// tera suas strings todas em maiúsculo.

// linha 7 foi feito um console log com a variável todasFrutas,
// imprimindo assim no terminal o resultado da junção das arrays acima.

// Z = 20
// i=30

// Z = 50
// i = 40

// Z = 90
// i = 50

// var z = 0;
// for(var i = 20; i < 50; i+=10){
//     z+=i;
// }

// console.log(z)

// let valor = 5;
// let fatorial = 1;

// for (let i = valor ; i <= 5; i++){
//     fatorial*=i;
// }

// console.log("Fatorial = " + fatorial);


// A partir de uma função construtora, instanciamos um objeto
// para criarmos novos objetos passanado seus valores por parametros. 
// Para instanciar um novo objeto utilizamos a palavra chave "new funcaoConstrutora". 
// Sendo assim, é possivel criar quantos objetos quiser.


// function soma(a=1, b=3, c){
//     return a+b+c;
// }

// console.log(soma());
// console.log(soma(3,10,3,1));
// console.log(soma(1,2));


for( var i=0; i<50; i+=10){
    console.log(i)
}

console.log(i)