/* Functions / Funções
- Trecho de código que é executado
Somente quando solicitado (Parente gente boa)
- Trecho de código que pode ser Reutilizado várias vezes

[ ] O que é uma função e como usar
[ ] Funcão VOID (vazia) / Não RTORNA nada
[ ] Funcão com parâmetros
[ ] Função Return
[ ] Arrow Function
*/

const number = 200
console.log(number)


/*void */
function digaMeuNome() {
    const name = "Julio Cesar da Cruz"
    console.log(name)
}
digaMeuNome()


/* parâmetros*/


function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log(resultado)
}
soma(20, 10)
/* return */

function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado
}

const resultadoDaSoma = soma(30, 40)
console.log(resultadoDaSoma)

function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return "Está no AZUL"
    } else {
        return "Está no VERMELHO"
    }
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000, 2000)

console.log(maria)
console.log(joao)


/* Arrow Function (função Flecha) */

function abacate(){}  //fora classica
const digaMeuNome2 = () => { //Forma moderna
    console.log("Julio")
}
digaMeuNome2()
