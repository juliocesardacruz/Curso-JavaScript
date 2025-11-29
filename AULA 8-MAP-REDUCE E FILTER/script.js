/*

DOMINANDO ARRAYS no JavaScript

Map (Mapear item por item do Array)
 - Cria um novo array com a mesma quantidade de itens do array original.
 - O novi array voce pode alterar o que quiser em relação ao array original.
 - Você tem acesso a 3 dados?
    - Item por Item do array
    - Posição atual do array
    - Array completo

 */

    const numeros = [1,2,3,4,5]

    const dobro = numeros.map(numero => numero * 2)
    console.log(dobro)



    const numeros = [1,2,3,8,10]

    const dobro = numeros.map((numero, index, arrayCompleto) => {
        console.log(arrayCompleto)
    })



    const numeros = [1,2,3,8,10,20]

    const dobro = numeros.map((numero) => {
        return numero * 4
    })
    console.log(dobro)


/*
Reduce (Reduzir o Array a um único valor)
    - Reduz o array inteiro a um ÚNICO valor
        - Você tem acesso a 4 dados:
            - Acumulador
            - Valor Atual
            - Posição Atual
            - Array completo
*/

const numeros = [1,2,3,4,5]

const soma = numeros.reduce((acumulador, atual) => {
    const total = acumulador + atual

    return total

})

console.log(soma)



/*
FILTER (FILTRAR O ARRAY)
    - Cria um novo array filtrando os valores desejados do array original
    - Você tem acesso a 3 dados:
        - Item por Item do array
        - Posição atual do array
        - Array completo
      
*/

const numeros = [1,2,3,4,5,6,7,8,9,10]

const pares = numeros.filter(numero => {
    return numero %2===0
})

console.log(pares)