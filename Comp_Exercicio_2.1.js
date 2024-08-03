/* Faça um programa que:
a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo) */

const minhaIdade = Number(prompt ("Qual a sua idade?"))
const idadeAmigo = Number(prompt ("Qual a idade do seu melhor amigo?"))

const resultado1 = minhaIdade > idadeAmigo === true
console.log("Sua idade é maior do que a do seu melhor amigo?" , resultado1 )
console.log("A diferença de idade:" , minhaIdade - idadeAmigo)
