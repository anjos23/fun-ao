//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
 /* function exibirMensagem(texto){
    return texto.toUpperCase() +"-" + texto.length;    

}
console.log(exibirMensagem('vamos gremio'))
   
   
   
   //Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

   function soma(n1, n2){
    return n1 + n2;
   }


   function subtração(n1, n2){
    return n1 - n2;
   }

   function divisão (n1, n2){
    return n1 / n2 ;
   }

   function multiplicação(n1, n2){
   return  n1 * n2 ;
   }
   let somaDois = soma(2, 3)
   let subDois = subtração(2, 3)
   let divDois = divisão(2, 3)
   let multDois = multiplicação(2, 3)
   console.log('Numeros inseridos: ' + 2 + ', ' + 3)
   console.log( 'soma: '+ somaDois)
   console.log('subtração: '+ subDois)
   console.log('divisão: '+ divDois)
   console.log('multiplicação: '+ multDois)




   function hipo(cat1, cat2){
    return Math.sqrt(Math.pow(cat1, 2)+ Math.pow(cat2, 2))

   }console.log(hipo(3,4).toFixed(2));  */
/*
   let variavel = 0

   function executa(variavel){
    return variavel = 356;
   }
   alert(variavel)
   executa(5) */
   //Escreva as funções explicadas abaixo:
   //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
  
   function imprimir(){
      return "Eu sou Thales, tenho 33 anos, moro em São Leopoldo e sou estudante."

   }
   console.log(imprimir("Eu sou Thales, tenho 33 anos, moro em São Leopoldo e sou estudante."))


function informacoesPessoa(nome, idade, cidade, profissao){
   return `ola ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`
}

/*let nomePessoa = prompt('nome:')
let idadePessoa = Number(prompt('idade: '))
alert (informacoesPessoa(nomePessoa, idadePessoa,'saoleopoldo',"estudante" ))


function retornaMaior (num1, num2){
return num1 >= num2

}
alert(retornaMaior(Number(1), Number(3)))

function ePar(num){
   return num % 2 === 0;

}
alert (ePar(250))

*/

let desafioA= (meuTime) => {//MODELO ARROW FUNCTION
   return meuTime;


}
//alert (desafioA('nacional'))

let desafioB = (num1, num2) => {
  alert(num1 +' ' +num2)
   let soma = num1 + num2 ;
 let resultado =  desafioA(soma);
 alert(resultado)



}

//objetos

