function preparaPrato(escolha, tempoEscolhido) {

  switch (escolha) {
    case 1:
        var prato = 'Pipoca'
        var tempoPreparo = 10;
        break;
    case 2:
        var prato = 'Macarrão'
        var tempoPreparo = 8;
        break;
    case 3:
        var prato = 'Carne'
        var tempoPreparo = 15;
        break; 
    case 4:
        var prato = 'Feijão'
        var tempoPreparo = 12;
        break; 
    case 5:
        var prato = 'Brigadeiro'
        var tempoPreparo = 8;
        break;
    default:
        console.log("Prato inexistente")
        var prato = null;
        break;
  }

  if(prato !== null){
        if(tempoEscolhido < tempoPreparo){
            console.log(`Tempo insuficiente. ${prato} não esta pronto(a). =/`)
        }else if(tempoEscolhido > 2 * tempoPreparo && tempoEscolhido <= 3 * tempoPreparo){
            console.log(`${prato} queimou. =/`)
        }else if(tempoEscolhido >= 3 * tempoPreparo){
            console.log("Explodiu o microondas")
        }else{
            console.log(`${prato} esta pronto(a), aproveite õ//!`)
        }    
    }
}

preparaPrato(5, 30);