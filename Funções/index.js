//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function exibirMensagem(texto){
    return texto.toUpperCase() +"-" + texto.length;    

}
console.log(exibirMensagem('vamos gremio'))
   
   
   
   //Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

   function soma(n1, n2){
    return n1 + n2;
   }


   function subtração(2, 3){
    return n1 - n2;
   }

   function divisão (){
    return n1 / n2 ;
   }

   function multiplicação(){
   return  n1 * n2 ;
   }
   let somaDois = soma(2, 3)
   let subDois = subtração(2, 3)
   let divDois = divisão(2, 3)
   let multDois = multiplicação(2, 3)
   console,log('Numeros inseridos: ' + 2 + ', ' + 3)
   console.log( 'soma: '+ somaDois)
   console.log('subtração: '+ subDois)
   console.log('divisão: '+ divDois)
   console.log('multiplicação: '+ multDois)