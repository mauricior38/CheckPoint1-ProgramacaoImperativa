function print(a, b){

    const primeiraParam = 'Múltiplo do primeiro parâmetro';
    const segundaParam = 'Múltiplo do segundo parâmetro';
    const doisParam = 'Multiplo dos dois parâmetros';
    const nenhumParam = 'Não atende nenhum parâmetro';

    if( a > 100 || b > 100){
        console.log('A função precisa ser com valores entre 0 e 100.')
        return;
    }

    for(i = 1; i <= 100; i++){ 
        if(i % a == 0 && i % b == 0){
            console.log(i + ' - ' +  doisParam)
        }else if(i % a == 0){
            console.log(i + ' - ' + primeiraParam )
        }else if(i % b == 0){
            console.log(i + ' - ' + segundaParam)
        }else{
            console.log(i + ' - ' + nenhumParam)
        }
    }


}

print(5, 10);


1) o tipo de dados da pk deve ser igual ao da fk (ex.: vc colocou id_animal na tabela inscricao como varchar(50), mas na tabela animal o campo é INT)
R) Realmente foi desatenção minha. Corrigido.

2) um animal não pode ser inscrito em mais de um evento? Se sim, então a relação não é 1:1 como você colocou.
R) Corrigido, realmente um animal pode participar de muitos eventos. No caso a entidade inscrição ficaria com uma entidade intermediária.

3) A raça de um animal depende da competição ou do animal em si? Se eu tenho um labrador e eu inscrevo esse labrador em um evento. A raça dele naquele evento específico pode ser diferente da raça original, sendo que é o mesmo cão? Acho que não. Então o id_raca na tabela inscrição não faz sentido.
R) Então na tabela de inscrição faço referência somente ao animal, certo? Uma vez esse dado referenciado, eu teria acesso as informações desse animal, como raça por exemplo?

4) não entendi o id_fazenda em inscrição. O evento necessariamente acontece em uma fazenda? Se sim, então há outra pergunta. A fazenda em que ocorre o evento sempre será a mesma do animal? Se sim, então o id_fazenda em inscrição é desnecessário. Se não, então deveria ter uma ligação direta da fazenda com inscrição.
R) O id_fazenda seria a fazenda no qual esse animal pertence, acredito que eu tenha cometido o mesmo erro da raça acima citado por você. No caso esse animal pertence a uma fazenda, mas uma fazenda pode pertencer a vários animais. Corrigido e retirado da tabela de inscrição.

5) a relação raca > animal não me parece correta. Da forma como está você está dizendo que somente um animal pode ser de uma raça e que não podem ter outros animais da mesma raça. A meu ver não faz sentido. A relação não seria 1:1 neste caso.
R) Realmente um animal pertence uma raça, mas uma raça pode pertencer a vários animais. Não é um relacionamento de 1:1 e sim n:1, certo? Correção realizada também. 