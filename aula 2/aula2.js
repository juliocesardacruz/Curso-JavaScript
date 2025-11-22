/* Variáveis

const
let
var (NÂO é recomendado USAR)


*/

let teste = "Teste de variável ok"
teste = 30
console.log(teste)



/* tipos de Dados

String -> Textos
Numbers -> Números
Boolean -> Booleano
Object -> Objetos
Null & Undefined
Array -> Matriz


Strings - Podem ser criados com aspas duplas (""), aspas simples ('') e craze (``)
Aspas dupla e simples são iguais e não podem pular linha. A craze permite pular linha, além de poder misturar texto com variável  ${nome da variável}

Boolean - Verifica se é true or false - verdadeiro ou falso

Object - Forma de agrupar várias informações

Null & Undefined - Nulo ou Indefinido - falta de informação, sendo que Undefined é quando há algum erro do programador e o Null é quando você decide que ali não vai ter alguma informação.

Array - Serve para agrupar muitas informações


*/
const numero = 100
const texto = "Escrever o que eu quiser na mesma linha"
const texto2 = `Com craze pode-se 
pular linha e colocar uma variável ${numero}`


console.log(texto)
console.log(texto2)
console.log(`O número é ${numero}`)



/* Objeto */
const usuario = {
    nome: 'Julio',
    idade: 44,
    casado: false,
    conjuge: null
}
console.log(usuario)
/* Caso queira somente uma informação do objeto tipo a idade, é somente informar no console.log */
console.log(usuario.nome)


/* Array */
const meuarray = [
    {
       nome: 'Julio',
    idade: 44,
    casado: false,
    conjuge: null 
    },

    {
       nome: 'Rodolfo',
    idade: 40,
    casado: true,
    conjuge: 'Marcela' 
    }
]
console.log(meuarray)
/*Caso queira visualizar somente uma posição do array, no console.log terá qu colocar o nome do array, conchetes e dentro dos colchetes a posição do array. Exemplo na posição 0 (pois inicia na posição 0)*/
console.log(meuarray[0])