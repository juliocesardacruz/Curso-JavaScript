/*

ForEach(item, index, array)

item) - Dados/Informações contidos na posição atual do Array.
index) - Número da Posição. Sempre começando em 0.
array) - Retorna o Array completo.

*/

const users = [
    {name: 'Julio', age: 44, contact: '(16)99776-2320'},
    {name: 'Paulo', age: 21, contact: '(12)93443-3434'},
    {name: 'Aline', age: 40, contact: '(16)94566-3434'},
    {name: 'Maria', age: 12, contact: '(16)94343-3476'},
]

users.forEach(function(item, index, array){
    if(item.age < 18){
        console.log(`O cliente ${item.name}, da posição ${index}, é menor de idade!!`)
    } else{
        console.log(`O cliente ${item.name}, da posição ${index}, é maior de idade!!`)
    }
})





const list = [1,2,7,12,14,17,25,32,35,40,42,43,48,49,50]

list.forEach(function(item){
    if(item % 2 ==0){
        console.log(`O número ${item} é par`)
    }else {
        console.log(`O número ${item}  é impar`)
    }
})




const tabuada = [6]
// console.log(tabuada)
tabuada.forEach(function(item){
    for(let i=0; i <= 10; i++){
        let result = tabuada * i
        console.log(`${tabuada} X ${i} = ${result}`)
    }
})

