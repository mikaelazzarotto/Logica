/*2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)*/

let nomeCompleto = prompt ("Digite o nome completo:")
let tipoJogoInput = prompt ("Digite o tipo de jogo: 'IN' para internacional e 'DO' para doméstico.")
let etapaJogoInput = prompt ("Indique a etapa do jogo: SF para semi-final; DT para decisão de terceiro lugar; FI para final.")
let categoria = Number (prompt ("Indique a categoria de ingresso: 1, 2, 3, ou 4."))
let quantidade = Number (prompt ("Indique a quantidade de ingressos que deseja comprar:"))

let tipoJogoOutput = String
if (tipoJogoInput === 'IN'){
    tipoJogoOutput = 'Internacional'
} else if (tipoJogoInput === 'DO') {
    tipoJogoOutput = 'Doméstico'
}
let etapaJogoOutput = String
switch (etapaJogoInput) {
    case 'SF':
        etapaJogoOutput = "Semi Final"
        break;
    case 'DT':
        etapaJogoOutput = "Decisão Terceiro Lugar"
        break;
    case 'FI':
        etapaJogoOutput = "Final"
        break;
    default:
        etapaJogoOutput = "Dados inválidos"
        break;
}

let valorIngresso
switch (categoria) {
    case 1:
        if (etapaJogoInput === 'SF') {
            valorIngresso = 1320;
        } else if (etapaJogoInput === 'DT') {
            valorIngresso = 660;
        } else if (etapaJogoInput === 'FI') {
            valorIngresso = 1980;
        }
        break

    case 2:
        if (etapaJogoInput === 'SF') {
            valorIngresso = 880;
        } else if (etapaJogoInput === 'DT') {
            valorIngresso = 440;
        } else if (etapaJogoInput === 'FI') {
            valorIngresso = 1320;
        }
        break

    case 3:
        if (etapaJogoInput === 'SF') {
            valorIngresso = 550;
        } else if (etapaJogoInput === 'DT') {
            valorIngresso = 330;
        } else if (etapaJogoInput === 'FI') {
            valorIngresso = 880;
        }
        break
    case 4:
        if (etapaJogoInput === 'SF') {
            valorIngresso = 220;
        } else if (etapaJogoInput === 'DT') {
            valorIngresso = 170;
        } else if (etapaJogoInput === 'FI') {
            valorIngresso = 330;
        }
        break
}

let moeda = String
let valorConvertido
if (tipoJogoInput === 'IN') {
    moeda = 'US$'
    valorConvertido = valorIngresso / 4.10
} else if (tipoJogoInput === 'DO') {
    moeda = "R$"
    valorConvertido = valorIngresso
}

let valorTotal = quantidade * valorConvertido

console.log( '--- Dados da compra ---' , '\nNome do cliente:' , nomeCompleto , '\nTipo do jogo:' , tipoJogoOutput , '\nEtapa do jogo:' , etapaJogoOutput , '\nCategoria:' , categoria , '\nQuantidade de ingressos:' , quantidade , 'ingressos' , '\n--- Valores ---' , '\nValor do ingresso:' , moeda , valorConvertido , '\nValor Total:' , moeda , valorTotal )
