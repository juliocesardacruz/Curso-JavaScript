/*

If & Else -> Controlador de Fluxo

If(SE)
Else (SE NÃO)

Operadores de Comparação
> maior que
< menor que
== igual que Comparando SOMENTE o valor)
=== igual que (Compara o VALOR e o TIPO)
>= maior ou igual que
<= menor ou igual que

*/

const notaDoAluno = 4

if ( notaDoAluno <= 4) {
    console.log("Aluno precisa estudar mais")
}

if (notaDoAluno > 4) {
    console.log("APROVADO com nota mínima")
} 

if (notaDoAluno < 10 && notaDoAluno <= 7){
    console.log("APROVADO com sucesso")
} else if (notaDoAluno === 10) {
    console.log("Aluno NOTA 10")
}

