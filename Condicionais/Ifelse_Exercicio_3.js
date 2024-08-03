/*.Login Simples: Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta".*/

let senha = 1234
let senhaDigitada = Number (prompt ("Digite sua senha:"))

if (senhaDigitada === senha) {
    console.log("Login bem sucedido!");
} else {
    console.log("Senha incorreta!");
}
