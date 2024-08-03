/* Número Positivo ou Negativo: Solicite um número do usuário e, em seguida, 
determine se o número é positivo, negativo ou igual a zero. 
Exiba a mensagem correspondente.*/

let numero = Number (prompt ("Digite um número:"))
if (numero >=1) {
    console.log ("Este número é positivo")
} else if (numero <0) {
    console.log ("Este número é negativo")
} else { 
    console.log ("este número é 0")
}
