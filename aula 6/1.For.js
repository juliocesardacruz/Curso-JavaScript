/*
Estrutura de Repetição - LOOP
    FOR
       1) INICIALIZAÇÃO - Crua uma variável e coloca um valor inicial para ela
       
       2) CONDIÇÃO - Enquanto for true, o laço continuará interando. Ele irá verificar antes de cada interação.

       3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta.


       for([inicialização]; [condição]; [expressão final]){
            Seu código aqui
       }
*/

const users = ['Maria', 'Aline', 'João'] //lenght (tamanho do array) = 3

for(let i = 0; i < users.length; i++)
    console.log(users[i])