/*
Estrutura de Repetição - LOOP
 - FOR IN utilziado em objetos {}
 - Itera por todos os ítens do Objetos

 */

 const user = {
    name: "Julio",
    age: 44,
    street: "Rua Luiz Porphirio"
 }
// console.log(user.name)
// console.log(user["name"])


// for(let key in user){
//     console.log(key)
// }
//para ver os valores de cada key

// for(let key in user){
//     console.log(user[key])
// }

for(let key in user){
    console.log(key + ': ' + user[key])
}

//Forma mais profissional

for(let key in user){
    console.log(`${key} : ${user[key]}`)
}